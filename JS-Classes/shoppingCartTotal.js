class Cart {
    constructor() {
        this.items = [];
    }
    
    addItem(name, price, quantity) {
        this.items.push({
            name: name,
            price: parseFloat(price),
            quantity: parseInt(quantity)
        });
    }
    
    getTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }
    
    validateCoupon(coupon) {
        const couponRegex = /^(SAVE|DISC)\d+$/;
        return couponRegex.test(coupon);
    }
    
    applyCoupon(coupon) {
        if (!this.validateCoupon(coupon)) {
            return {
                valid: false,
                message: "Invalid coupon format"
            };
        }
        
        const match = coupon.match(/(\d+)$/);
        if (match) {
            const discountPercent = parseInt(match[1]);
            const total = this.getTotal();
            const discountAmount = total * (discountPercent / 100);
            const finalTotal = total - discountAmount;
            
            return {
                valid: true,
                originalTotal: total,
                discountPercent: discountPercent,
                discountAmount: discountAmount,
                finalTotal: finalTotal
            };
        }
        
        return {
            valid: false,
            message: "Could not process coupon"
        };
    }
    
    displayCart() {
        console.log("Cart Items:");
        this.items.forEach(item => {
            console.log(`- ${item.name}: $${item.price} x ${item.quantity} = $${item.price * item.quantity}`);
        });
        console.log(`Total: $${this.getTotal()}`);
    }
}

// Create a new cart and add items
const cart = new Cart();
cart.addItem("Laptop", 1200, 1);
cart.addItem("Mouse", 25, 2);
cart.addItem("Keyboard", 75, 1);

console.log("Shopping Cart:");
cart.displayCart();

console.log("\nCoupon Validation:");
console.log("SAVE20:", cart.validateCoupon("SAVE20"));
console.log("DISC10:", cart.validateCoupon("DISC10"));
console.log("INVALID:", cart.validateCoupon("INVALID"));

console.log("\nApplying Coupons:");
const save20Result = cart.applyCoupon("SAVE20");
if (save20Result.valid) {
    console.log(`SAVE20 Coupon Applied:`);
    console.log(`Original Total: $${save20Result.originalTotal}`);
    console.log(`Discount (${save20Result.discountPercent}%): -$${save20Result.discountAmount}`);
    console.log(`Final Total: $${save20Result.finalTotal}`);
}

const disc10Result = cart.applyCoupon("DISC10");
if (disc10Result.valid) {
    console.log(`\nDISC10 Coupon Applied:`);
    console.log(`Original Total: $${disc10Result.originalTotal}`);
    console.log(`Discount (${disc10Result.discountPercent}%): -$${disc10Result.discountAmount}`);
    console.log(`Final Total: $${disc10Result.finalTotal}`);
}

const invalidResult = cart.applyCoupon("INVALID");
if (!invalidResult.valid) {
    console.log(`\nInvalid Coupon: ${invalidResult.message}`);
}