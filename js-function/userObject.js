const user = {
    name: "John Doe",
    
    showName: () => {
        console.log(this.name);
    },
    
    showNameFixed: function() {
        console.log(this.name);
    }
};

console.log("Using arrow function:");
user.showName();

console.log("Using normal function:");
user.showNameFixed();

const user2 = {
    name: "Jane Smith",
    showName: () => {
        console.log(this.name);
    },
    showNameFixed: function() {
        console.log(this.name);
    }
};

console.log("Second user with arrow function:");
user2.showName();

console.log("Second user with normal function:");
user2.showNameFixed();