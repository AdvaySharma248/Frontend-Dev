function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Server A response");
            } else {
                reject("Server A failed");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve("Server B response");
            } else {
                reject("Server B failed");
            }
        }, 3000);
    });
}

Promise.all([serverA(), serverB()])
    .then(results => {
        console.log("Deployment completed for all servers");
        console.log(results);
    })
    .catch(error => {
        console.log("Error:", error);
    });

Promise.race([serverA(), serverB()])
    .then(result => {
        console.log("Fastest response:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    });