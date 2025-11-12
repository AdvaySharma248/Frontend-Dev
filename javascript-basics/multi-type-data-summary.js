const userName = "Alice Johnson";
const userAge = 28;
const isSubscribed = true;
const userHobbies = ["reading", "swimming", "coding"];
const userAddress = {
    street: "123 Main St",
    city: "New York",
    zipCode: 10001
};
const userPhone = null;
let userNickname;

const dataSummary = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "User Age", Value: userAge, Type: typeof userAge },
    { Label: "Is Subscribed", Value: isSubscribed, Type: typeof isSubscribed },
    { Label: "User Hobbies", Value: userHobbies, Type: Array.isArray(userHobbies) ? "array" : typeof userHobbies },
    { Label: "User Address", Value: JSON.stringify(userAddress), Type: typeof userAddress },
    { Label: "User Phone", Value: userPhone, Type: userPhone === null ? "null" : typeof userPhone },
    { Label: "User Nickname", Value: userNickname, Type: typeof userNickname }
];

console.log("=== Multi-Type Data Summary ===");
console.table(dataSummary);

console.log("\n=== Detailed Type Information ===");
console.log(`User Name (${typeof userName}):`, userName);
console.log(`User Age (${typeof userAge}):`, userAge);
console.log(`Is Subscribed (${typeof isSubscribed}):`, isSubscribed);
console.log(`User Hobbies (${Array.isArray(userHobbies) ? "array" : typeof userHobbies}):`, userHobbies);
console.log(`User Address (${typeof userAddress}):`, userAddress);
console.log(`User Phone (${userPhone === null ? "null" : typeof userPhone}):`, userPhone);
console.log(`User Nickname (${typeof userNickname}):`, userNickname);