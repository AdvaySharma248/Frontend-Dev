const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const validEntries = [];
const invalidEntries = [];

console.log("=== JSON AUDIT PROCESS ===");
for (let i = 0; i < rawData.length; i++) {
    const entry = rawData[i];
    
    try {
        const parsed = JSON.parse(entry);
        
        if (parsed.user === undefined) {
            throw new Error("Missing 'user' key");
        }
        
        if (parsed.age === undefined) {
            throw new Error("Missing 'age' key");
        }
        
        const ageAsNumber = Number(parsed.age);
        
        if (isNaN(ageAsNumber)) {
            throw new Error("Age is not a valid number");
        }
        
        if (ageAsNumber < 18) {
            throw new Error("User is under 18 years old");
        }
        
        validEntries.push({
            original: entry,
            parsed: parsed,
            age: ageAsNumber,
            index: i
        });
        
        console.log(`✓ Valid entry at index ${i}: ${entry}`);
        
    } catch (error) {
        invalidEntries.push({
            original: entry,
            index: i,
            error: error.message
        });
        
        console.log(`✗ Invalid entry at index ${i}: ${entry} | Error: ${error.message}`);
    }
}

console.log("\n=== VALID ENTRIES ===");
for (let i = 0; i < validEntries.length; i++) {
    const entry = validEntries[i];
    console.log(`Index ${entry.index}: User ${entry.parsed.user}, Age ${entry.age}`);
}

console.log("\n=== INVALID ENTRIES ===");
for (let i = 0; i < invalidEntries.length; i++) {
    const entry = invalidEntries[i];
    console.log(`Index ${entry.index}: ${entry.original} | Error: ${entry.error}`);
}

console.log(`\n=== SUMMARY ===`);
console.log(`Valid entries: ${validEntries.length}`);
console.log(`Invalid entries: ${invalidEntries.length}`);

console.log("\n=== ADULT USERS (18+) ===");
const adultUsers = validEntries.filter(entry => entry.age >= 18);
for (let i = 0; i < adultUsers.length; i++) {
    const user = adultUsers[i];
    console.log(`User: ${user.parsed.user}, Age: ${user.age}`);
}

console.log(`\nTotal adult users: ${adultUsers.length}`);