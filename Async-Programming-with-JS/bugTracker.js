function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            } else {
                reject("API failure");
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.table(bugs);
    })
    .catch(error => {
        console.log("Error:", error);
    });