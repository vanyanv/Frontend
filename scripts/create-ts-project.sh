#!/bin/bash

# Check if a name was provided
if [ -z "$1" ]; then
  echo "Please provide a directory and file name."
  exit 1
fi

# Navigate up one directory
cd src

# Create a new directory with the provided name
mkdir "$1" || exit
cd "$1" || exit

# Create a TypeScript file with the same name as the directory
touch "$1.ts"

# Create a TypeScript Test file with the same name as the directory
touch "$1.test.ts"

# Create a README.md file
cat <<EOL > README.md
# $1

## Description
This is the TypeScript file for the project \`$1\`.

## Files
- \`$1.ts\`: The main TypeScript file.

EOL

echo "Project '$1' has been created with '$1.ts', $1.test.ts' and README.md'."
