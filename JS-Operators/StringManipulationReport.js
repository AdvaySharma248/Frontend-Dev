var productName = " wireless headphones PRO ";

var trimmedName = productName.trim();

var lowerCaseName = trimmedName.toLowerCase();

var words = lowerCaseName.split(" ");

var capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
});

var formattedName = capitalizedWords.join(" ");

var finalName = formattedName.replace("Pro", "Pro Edition");

console.log("Original Product Name: '" + productName + "'");
console.log("Cleaned Product Name: '" + finalName + "'");
console.log("Length of Cleaned Name: " + finalName.length + " characters");

console.log("\n--- Additional Test Cases ---");

var testProduct1 = "  smart phone X   ";
var result1 = processProductName(testProduct1);
console.log("Test 1 - Original: '" + testProduct1 + "' -> Cleaned: '" + result1 + "' (Length: " + result1.length + ")");

var testProduct2 = "   laptop bag pro MAX  ";
var result2 = processProductName(testProduct2);
console.log("Test 2 - Original: '" + testProduct2 + "' -> Cleaned: '" + result2 + "' (Length: " + result2.length + ")");

function processProductName(name) {
    var trimmed = name.trim();
    
    var lowerCase = trimmed.toLowerCase();
    
    var wordArray = lowerCase.split(" ");
    
    var filteredWords = wordArray.filter(function(word) {
        return word !== "";
    });
    
    var capitalized = filteredWords.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    var formatted = capitalized.join(" ");
    
    var final = formatted.replace("Pro", "Pro Edition");
    
    return final;
}