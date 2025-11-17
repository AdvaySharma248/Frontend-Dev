const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    
    const asNumber = Number(value);
    const asBoolean = Boolean(value);
    const asString = String(value);
    
    console.log(`Value: ${value} | Number: ${asNumber} | Boolean: ${asBoolean} | String: ${asString}`);
    
    if (isNaN(asNumber) || asNumber === null || asNumber === undefined || String(value).trim() === "") {
        invalidNumbers.push({
            original: value,
            number: asNumber,
            reason: isNaN(asNumber) ? "NaN" : (String(value).trim() === "" ? "Empty/Whitespace" : "Invalid format")
        });
    } else {
        validNumbers.push({
            original: value,
            number: asNumber
        });
    }
}

console.log("\n=== VALID NUMERIC DATA ===");
for (let i = 0; i < validNumbers.length; i++) {
    console.log(`Original: ${validNumbers[i].original} => Number: ${validNumbers[i].number}`);
}

console.log("\n=== INVALID NUMERIC DATA ===");
for (let i = 0; i < invalidNumbers.length; i++) {
    console.log(`Original: ${invalidNumbers[i].original} => Number: ${invalidNumbers[i].number} | Reason: ${invalidNumbers[i].reason}`);
}

console.log(`\nSummary: ${validNumbers.length} valid numbers, ${invalidNumbers.length} invalid numbers`);