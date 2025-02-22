class InMemoryDB {
    private records: Map<string, Map<string, number>>;
    private history: Map<string, { timestamp: number, value: number | null, expiration?: number }[]>;
    constructor() {
        // Main storage for records
        this.records = new Map();
        // History storage for tracking changes over time
        this.history = new Map();
    }

    set(timestamp: number, key: string, field: string, value: number) {
        // Create record if it doesn't exist
        if (!this.records.has(key)) {
            this.records.set(key, new Map());
        }
        
        // Set the field-value pair
        const record = this.records.get(key)!;
        record.set(field, value);
        
        // Store in history
        const historyKey = `${key}-${field}`;
        if (!this.history.has(historyKey)) {
            this.history.set(historyKey, []);
        }
        const history = this.history.get(historyKey)!;
        history.push({ timestamp, value });
    }

    compareAndSet(timestamp: number, key: string, field: string, expectedValue: number, newValue: number) {
        if (!this.records.has(key) || !this.records.get(key)!.has(field)) {
            return false;
        }
        const record = this.records.get(key)!;
        const currentValue = record.get(field);

        if (currentValue === expectedValue) {
            record.set(field, newValue);
            const historyKey = `${key}-${field}`;
            const history = this.history.get(historyKey)!;
            history.push({ timestamp, value: newValue });
            return true;
        }
        return false;
    }

    compareAndDelete(timestamp: number, key: string, field: string, expectedValue: number) {
        if (!this.records.has(key) || !this.records.get(key)!.has(field)) {
            return false;
        }
        const record = this.records.get(key)!;
        const currentValue = record.get(field);

        if (currentValue === expectedValue) {
            record.delete(field);
            const historyKey = `${key}-${field}`;
            const history = this.history.get(historyKey)!;
            history.push({ timestamp, value: null });
            return true;
        }
        return false;
    }

    get(timestamp: number, key: string, field: string) {
        if (!this.records.has(key) || !this.records.get(key)!.has(field)) {
            return null;
        }
        const record = this.records.get(key)!;
        return record.get(field);
    }

    display(timestamp: number, key: string, field: string) {
        const historyKey = `${key}-${field}`;
        if (!this.history.has(historyKey)) {
            return [];
        }
        const history = this.history.get(historyKey)!;
        return history
            .filter(entry => entry.timestamp <= timestamp)
            .map(entry => entry.value);
    }

    showField(key: string) {
        if(!this.records.has(key)) {
            return [];
        }
        const record = this.records.get(key)!;
        return Array.from(record.entries())
            .map(([field, value]) => `${field}: ${value}`).sort();
    }

    showPrefix(key: string, prefix: string) {
        if(!this.records.has(key)) {
            return [];
        }
        const record = this.records.get(key)!;
        return Array.from(record.entries())
            .filter(([field]) => field.startsWith(prefix))
            .map(([field, value]) => `${field}: ${value}`).sort();
    }

    setAt(key: string, field: string, value: number, timestamp: number) {
        if(!this.records.has(key)) {
            this.records.set(key, new Map());
        }
        const record = this.records.get(key)!;
        record.set(field, value);

        // Store in history
        const historyKey = `${key}-${field}`;
        if(!this.history.has(historyKey)) {
            this.history.set(historyKey, []);
        }
        const history = this.history.get(historyKey)!;
        history.push({ timestamp, value });
        
        return "";
    }

    setAtWithTTL(key: string, field: string, value: number, timestamp: number, ttl: number) {
        if(!this.records.has(key)) {
            this.records.set(key, new Map());
        }
        const record = this.records.get(key)!;
        record.set(field, value);
        
        // Store in history
        const historyKey = `${key}-${field}`;
        if(!this.history.has(historyKey)) {
            this.history.set(historyKey, []);
        }
        const history = this.history.get(historyKey)!;
        history.push({ timestamp: timestamp, value: value, expiration: timestamp + ttl });

        return "";
    }

    deleteAt(key: string, field: string, timestamp: number) {
        if(!this.records.has(key) || !this.records.get(key)!.has(field)) {
            return false;
        }
        const record = this.records.get(key)!;
        record.delete(field);

        const historyKey = `${key}-${field}`;
        if(!this.history.has(historyKey)) {
            this.history.set(historyKey, []);
        }
        const history = this.history.get(historyKey)!;
        history.push({ timestamp: timestamp, value: null });

        return true;
    }

    getAt(key: string, field: string, timestamp: number) {
        if(!this.records.has(key) || !this.records.get(key)!.has(field)) {
            return null;
        }
        const record = this.records.get(key)!;
        return record.get(field);
    }

    scanAt(key: string, timestamp: number) {
        
    }

    scanByPrefixAt(key: string, prefix: string, timestamp: number) {

    }

   
}

// Example usage:
const db = new InMemoryDB();

// Test the operations
console.log(db.set(1, "user1", "age", 25));              // Set age to 25
console.log(db.get(2, "user1", "age"));                  // Returns 25
console.log(db.compareAndSet(3, "user1", "age", 25, 26)); // Returns true
console.log(db.get(4, "user1", "age"));                  // Returns 26
console.log(db.display(5, "user1", "age"));              // Returns [25, 26]
console.log(db.compareAndDelete(6, "user1", "age", 26)); // Returns true
console.log(db.get(7, "user1", "age"));                  // Returns null

// Test cases
console.log("\n=== Testing InMemoryDB Operations ===\n");

// Testing set and get
console.log("Testing set and get:");
db.set(1, "user1", "age", 25);
console.log("Set user1 age to 25");
console.log("Get user1 age:", db.get(2, "user1", "age")); // Should be 25

// Testing compareAndSet
console.log("\nTesting compareAndSet:");
console.log("Try to update age from 25 to 26:", db.compareAndSet(3, "user1", "age", 25, 26)); // Should be true
console.log("Get updated age:", db.get(4, "user1", "age")); // Should be 26
console.log("Try to update with wrong expected value:", db.compareAndSet(5, "user1", "age", 25, 27)); // Should be false

// Testing multiple fields
console.log("\nTesting multiple fields:");
db.set(6, "user1", "score", 95);
db.set(7, "user1", "grade", 85);
console.log("All fields for user1:", db.showField("user1")); // Should show age, score, and grade

// Testing sorted fields
console.log("\n=== Testing Sorted Fields ===");
console.log("Adding fields in non-alphabetical order:");
db.set(8, "user1", "zebra", 100);
console.log("Added: zebra: 100");
db.set(9, "user1", "alpha", 200);
console.log("Added: alpha: 200");
db.set(10, "user1", "beta", 300);
console.log("Added: beta: 300");
console.log("\nShowing all fields (should be sorted alphabetically):");
console.log(db.showField("user1")); // Should show in alphabetical order

// Testing sorted prefix search
console.log("\n=== Testing Sorted Prefix Search ===");
console.log("Adding test fields in non-sequential order:");
db.set(11, "user1", "test3", 100);
console.log("Added: test3: 100");
db.set(12, "user1", "test1", 200);
console.log("Added: test1: 200");
db.set(13, "user1", "test2", 300);
console.log("Added: test2: 300");
console.log("\nShowing all test fields (should be sorted):");
console.log(db.showPrefix("user1", "test")); 

// Testing history
console.log("\nTesting value history:");
console.log("Age history:", db.display(10, "user1", "age")); // Should show [25, 26]

// Testing compareAndDelete
console.log("\nTesting compareAndDelete:");
console.log("Delete age field:", db.compareAndDelete(11, "user1", "age", 26)); // Should be true
console.log("Try to get deleted age:", db.get(12, "user1", "age")); // Should be null

// Testing non-existent values
console.log("\nTesting non-existent values:");
console.log("Get non-existent user:", db.get(13, "user2", "age")); // Should be null
console.log("Show fields of non-existent user:", db.showField("user2")); // Should be []