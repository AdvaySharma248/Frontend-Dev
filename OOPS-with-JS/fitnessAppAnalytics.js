class FitnessAnalytics {
    constructor(userData) {
        if (!userData || userData.length === 0) {
            throw new Error("Dataset cannot be empty");
        }
        this.userData = userData;
    }
    
    getActiveUsers() {
        return this.userData.filter(user => user.steps > 7000);
    }
    
    getAverageCalories() {
        const totalCalories = this.userData.reduce((sum, user) => sum + user.calories, 0);
        return totalCalories / this.userData.length;
    }
    
    getUserSummary() {
        return this.userData.map(user => 
            `${user.user}: ${user.steps} steps, ${user.calories} calories`
        );
    }
}

const userData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    const analytics = new FitnessAnalytics(userData);
    
    console.log("Active users:", analytics.getActiveUsers());
    console.log("Average calories:", analytics.getAverageCalories());
    console.log("User summary:", analytics.getUserSummary());
} catch (error) {
    console.log("Error:", error.message);
}

try {
    const emptyAnalytics = new FitnessAnalytics([]);
    console.log("Empty dataset:", emptyAnalytics.getActiveUsers());
} catch (error) {
    console.log("Error:", error.message);
}