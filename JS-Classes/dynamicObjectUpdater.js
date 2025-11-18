const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

function updateUser(name, email, age) {
    user.name = name;
    user.email = email;
    user.age = parseInt(age);
    
    return user;
}

function displayUser() {
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Age: ${user.age}`);
}

console.log("Initial User Data:");
displayUser();

console.log("\nUpdating user data:");
const updatedUser = updateUser("Jane Doe", "jane.doe@mail.com", "25");
console.log("Updated User Data:");
displayUser();

console.log("\nDirect object modification:");
user.name = "Bob Smith";
user.email = "bob.smith@mail.com";
user.age = 30;
console.log("Modified User Data:");
displayUser();

console.log("\nUser object structure:");
console.log(user);