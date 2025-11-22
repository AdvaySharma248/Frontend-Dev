function loadProfile() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Profile Loaded");
            } else {
                reject("Profile Failed");
            }
        }, 2000);
    });
}

function loadPosts() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Posts Loaded");
            } else {
                reject("Posts Failed");
            }
        }, 1500);
    });
}

function loadMessages() { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("Messages Loaded");
            } else {
                reject("Messages Failed");
            }
        }, 1000);
    });
}

async function loadDashboard() {
    const startTime = Date.now();
    
    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);
    
    const endTime = Date.now();
    
    results.forEach((result, index) => {
        const moduleName = ['Profile', 'Posts', 'Messages'][index];
        if (result.status === 'fulfilled') {
            console.log(`${moduleName}: ${result.value}`);
        } else {
            console.log(`${moduleName}: ${result.reason}`);
        }
    });
    
    console.log(`Total time taken: ${endTime - startTime}ms`);
}

loadDashboard();