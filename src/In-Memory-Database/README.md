# In-Memory Database Implementation

A simplified version of an in-memory database with support for basic operations, filtering, TTL, and backup/restore functionality.

## Features by Level

### Level 1: Basic Operations
- Basic operations to manipulate records, fields, and values
- Support for SET, GET, and DELETE operations
- String-type keys and values

### Level 2: Display & Filtering
- Display record fields based on filters
- Support for SCAN and SCAN_BY_PREFIX operations
- Lexicographical sorting of fields

### Level 3: Timeline & TTL Support
- Time-To-Live (TTL) configurations for records
- Timestamp-based operations
- Forward-flowing timeline guarantees

### Level 4: Backup & Restore
- Database state backup functionality
- State restoration with TTL recalculation
- Timestamp-based backup management

## API Reference

### Level 1: Basic Operations

#### SET
SET <key> <field> <value> — should insert a field-value pair to the record associated with key. If the field in the record already exists, replace the existing value with the specified value. If the record does not exist, create a new one. This operation should return an empty string.

#### GET
GET <key> <field> — should return the value contained within field of the record associated with key. If the record or the field doesn't exist, should return an empty string.

#### DELETE
DELETE <key> <field> — should remove the field from the record associated with key. Returns if the field was successfully deleted, and "false" if the key or the field do not exist in the database.

### Level 2: Display & Filtering

#### SCAN
SCAN <key> — should return a string representing the fields of a record associated with key. The returned string should be in the following format "<field1>(<value1>), <field2>(<value2>), ...", where fields are sorted lexicographically. If the specified record does not exist, returns an empty string.

#### SCAN_BY_PREFIX
SCAN_BY_PREFIX <key> <prefix> — should return a string representing some fields of a record associated with key. Specifically, only fields that start with prefix should be included. The returned string should be in the same format as in the SCAN operation with fields sorted in lexicographical order.

### Level 3: Timeline & TTL Support

#### SET_AT
SET_AT <key> <field> <value> <timestamp> — should insert a field-value pair or updates the value of the field in the record associated with key. This operation should return an empty string.

#### SET_AT_WITH_TTL
SET_AT_WITH_TTL <key> <field> <value> <timestamp> <ttl> — should insert a field-value pair or update the value of the field in the record associated with key. Also sets its Time-To-Live starting at timestamp to be ttl. The ttl is the amount of time that this field-value pair should exist in the database, meaning it will be available during this interval: [timestamp, timestamp + ttl). This operation should return an empty string.

#### DELETE_AT
DELETE_AT <key> <field> <timestamp> — the same as DELETE, but with timestamp of the operation specified. Should return "true" if the field existed and was successfully deleted and "false" if the key didn't exist.

#### GET_AT
GET_AT <key> <field> <timestamp> — the same as GET, but with timestamp of the operation specified.

#### SCAN_AT
SCAN_AT <key> <timestamp> — the same as SCAN, but with timestamp of the operation specified.

#### SCAN_BY_PREFIX_AT
SCAN_BY_PREFIX_AT <key> <prefix> <timestamp> — the same as SCAN_BY_PREFIX, but with timestamp of the operation specified.

### Level 4: Backup & Restore

#### BACKUP
BACKUP <timestamp> — should save the database state at the specified timestamp, including the remaining ttl for all records and fields. Remaining ttl is the difference between their initial ttl and their current lifespan (the duration between the timestamp of this operation and their initial timestamp). Returns a string representing the number of non-empty non-expired records in the database.

#### RESTORE
RESTORE <timestamp> <timestampToRestore> — should restore the database from the latest backup before or at timestampToRestore. It's guaranteed that a backup before or at timestampToRestore will exist. Expiration times for restored records and fields should be recalculated according to the timestamp of this operation - since the database timeline always flows forward, restored records and fields should expire after the timestamp of this operation, depending on their remaining ttls at backup. This operation should return an empty string.

## Examples

### Level 1
The example below shows how these operations should work:

Queries

queries = [
["SET", "A", "B", "E"],
["SET", "A", "C", "F"],
["GET", "A", "B"],
["GET", "A", "D"],
["DELETE", "A", "B"],
["DELETE", "A", "D"]
]
Explanations

returns ""; database state: {"A": {"B": "E"}}
returns ""; database state: {"A": {"C": "F", "B":"E"}}
returns "E"
returns ""
returns "true"; database state: {"A": {"C": "F"}}
returns "false"; database state: {"A": {"C": "F"}}

### Level 2
The example below shows how these operations should work

Queries

queries = [
["SET", "A", "BC", "E"],
["SET", "A", "BD", "F"],
["SET", "A", "C", "G"],
["SCAN_BY_PREFIX", "A", "B"],
["SCAN", "A"],
["SCAN_BY_PREFIX", "B", "B"] ]
Explanations

returns ""; database state: {"A": {"BC": "E"}}
returns ""; database state: {"A": {"BC": "E", "BD": "F"}}
returns ""; database state: {"A": {"BC": "E", "BD": "F", "C": "G"}}
returns "BC(E), BD(F)"
returns "BC(E), BD(F), C(G)"
returns ""
the output should be ["", "", "", "BC(E), BD(F)", "BC(E), BD(F), C(G)", ""].

### Level 3
The examples below show how these operations should work

Queries

queries = [ 
["SET_AT_WITH_TTL", "A", "BC", "E", "1", "9"], 
["SET_AT_WITH_TTL", "A", "BC", "E", "5", "10"], 
["SET_AT", "A", "BD", "F", "5"], 
["SCAN_BY_PREFIX_AT", "A", "B", "14"], 
["SCAN_BY_PREFIX_AT", "A", "B", "15"] 
]
Explanations

returns ""; database state: {"A": {"BC": "E"}} 
where {"BC": "E"} expires at timestamp 10 returns ""; database state: {"A": {"BC": "E"}} 
as field "BC" in record "A" already 
exists, it was overwritten, 
and {"BC": "E"} now expires at timestamp 15 
returns ""; database state: {"A": {"BC": E", "BD": "F"}} 
where {"BD": "F"} does not expire 
returns "BC(E), BD(F)" 
returns "BD(F)"
the output should be ["", "", "", "BC(E), BD(F)", "BD(F)"].

Example2
Queries

queries = [ 
["SET_AT", "A", "B", "C", 
"1"], 
["SET_AT_WITH_TTL", "X", 
"Y", "Z", "2", "15"], 
["GET_AT", "X", "Y", "3"], ["SET_AT_WITH_TTL", "A", 
"D", "E", "4", "10"], 
["SCAN_AT", "A", "13"], 
["SCAN_AT", "X", "16"], 
["SCAN_AT", "X", "17"], 
["DELETE_AT", "X", "Y", 
"20"] 
]
Explanations

returns ""; database state: {"A": {"B": "C"}} returns ""; database state: {"X": {"Y": "Z"}, "A": {"B": "C"}} 
where {"Y": "Z"} expires at timestamp 17 returns "Z" 
returns ""; database state: 
{"X": {"Y": "Z"}, "A": {"D": "E", "B": "C"}} where {"D": "E"} expires at timestamp 14 and {"Y": "Z"} expires at timestamp 17 
returns "B(C), D(E)" 
returns "Y(Z)" 
returns ""; Note that all fields in record "X" have expired 
returns "false"; the record "X" was expired at timestamp 17 and can't be deleted.
the output should be ["", "", "Z", "", "B(C), D(E)", "Y(Z)", "", "false"].

### Level 4
Queries

queries = [ 
["SET_AT_WITH_TTL", "A", "B", "C", "1", "10"], 
["BACKUP", "3"], 
["SET_AT", "A", "D", "E", "4"], 
["BACKUP", "5"], 
["DELETE_AT", "A", "B", 
"8"], 
["BACKUP", "9"], 
["RESTORE", "10", "7"], 
["BACKUP", "11"], 
["SCAN_AT", "A", "15"], 
["SCAN_AT", "A", "16"] 
]
Explanations

returns ""; database state: {"A": {"B": "C"}} with lifespan `[1, 11)`, meaning that the record should be deleted at timestamp = 11. 
returns "1"; saves the database state 
returns ""; database state: {"A": {"D": "E", "B": "C"}} 
returns "1"; saves the database state 
returns "true"; database state: {"A": {"D": "E"}} returns "1"; saves the database state 
returns ""; restores the database to state of last backup at timestamp = 5: 
{"A": {"D": "E", "B": "C"}} 
with {"B": "C"} expiring at timestamp = 16: Since the initial ttl of the field is 10 
and the database was restored to the state at timestamp = 5; this field has had 
a lifespan of 4 and a remaining ttl of 6, so it will now expire at timestamp = 10 + 6 = 16. returns "1"; saves the database state 
returns "B(C), D(E)" 
returns "D(E)"
the output should be ["", "1", "", "1", "true", "1", "", "1", "B(C), D(E)", "D(E)"].