function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Test completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deploy completed");
        callback();
    }, 1000);
}

function celebrate() {
    console.log("Celebrate completed");
}

// Callback hell version
design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate();
            });
        });
    });
});

// Async/await version
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function pipeline() {
    await delay(1000);
    console.log("Design completed");
    
    await delay(1000);
    console.log("Build completed");
    
    await delay(1000);
    console.log("Test completed");
    
    await delay(1000);
    console.log("Deploy completed");
    
    console.log("Celebrate completed");
}

pipeline();