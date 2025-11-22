function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Order submitted successfully");
            } else {
                reject("Order submission failed");
            }
        }, 1000);
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success - ${result}`);
            return result;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed - ${error}`);
            if (attempt === 3) {
                throw new Error("Order could not be processed");
            }
        }
    }
}

processOrder()
    .then(result => {
        console.log("Order processing completed successfully");
    })
    .catch(error => {
        console.log("Error:", error.message);
    });