const menu = [
    { name: "Burger", price: 10.99 },
    { name: "Pizza", price: 12.99 },
    { name: "Salad", price: 8.99 },
    { name: "Pasta", price: 9.99 },
    { name: "Soda", price: 2.99 }
];

function calculateBill(orderItems) {
    const orderedItems = orderItems.map(itemName => {
        const menuItem = menu.find(item => item.name === itemName);
        if (!menuItem) {
            throw new Error(`Sorry, "${itemName}" is not available on our menu.`);
        }
        return menuItem;
    });
    
    const prices = orderedItems.map(item => item.price);
    const total = prices.reduce((sum, price) => sum + price, 0);
    
    return {
        items: orderedItems,
        total: total.toFixed(2)
    };
}

try {
    const order1 = calculateBill(["Burger", "Soda"]);
    console.log("Order 1:", order1);
    
    const order2 = calculateBill(["Pizza", "Salad", "Pasta"]);
    console.log("Order 2:", order2);
    
    const order3 = calculateBill(["Burger", "Tacos"]);
    console.log("Order 3:", order3);
} catch (error) {
    console.log("Error:", error.message);
}