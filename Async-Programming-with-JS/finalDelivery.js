function takeOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                console.log("Step 1: Order taken");
                resolve();
            } else {
                reject("Failed to take order");
            }
        }, 1000 + Math.random() * 1000);
    });
}

function prepare() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                console.log("Step 2: Food prepared");
                resolve();
            } else {
                reject("Failed to prepare food");
            }
        }, 1000 + Math.random() * 1000);
    });
}

function pack() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                console.log("Step 3: Package ready");
                resolve();
            } else {
                reject("Failed to pack food");
            }
        }, 1000 + Math.random() * 1000);
    });
}

function dispatch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                console.log("Step 4: Out for delivery");
                resolve();
            } else {
                reject("Failed to dispatch");
            }
        }, 1000 + Math.random() * 1000);
    });
}

function deliver() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                console.log("Delivery completed!");
                resolve();
            } else {
                reject("Failed to deliver");
            }
        }, 1000 + Math.random() * 1000);
    });
}

async function runPipeline() {
    try {
        console.log("Start Pipeline");
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();
    } catch (error) {
        console.log("Pipeline failed!");
        console.log("Error:", error);
    }
}

runPipeline();