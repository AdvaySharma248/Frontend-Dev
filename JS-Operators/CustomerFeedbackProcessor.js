var feedback = "Great product! Fast delivery and amazing sound quality!";

function processFeedback(feedbackText) {
    var words = feedbackText.trim().split(" ");
    var wordCount = words.length;
    
    var hasNegativeWords = feedbackText.includes("bad") || feedbackText.includes("poor");
    
    var feedbackType;
    if (!hasNegativeWords) {
        feedbackType = "Positive Feedback";
    } else {
        feedbackType = "Needs Improvement";
    }
    
    console.log("Feedback: " + feedbackText);
    console.log("Word Count: " + wordCount);
    console.log("Feedback Type: " + feedbackType);
    
    return {
        text: feedbackText,
        wordCount: wordCount,
        type: feedbackType
    };
}

console.log("=== Customer Feedback Processor ===");
processFeedback(feedback);

console.log("\n--- Testing Different Feedback Examples ---");

var positiveFeedback = "Excellent service and fast shipping. Highly recommend!";
console.log("\nPositive Feedback Test:");
processFeedback(positiveFeedback);

var negativeFeedback = "Poor quality product. Bad experience with customer service.";
console.log("\nNegative Feedback Test:");
processFeedback(negativeFeedback);

var mixedFeedback = "Good product but delivery was slow and packaging was poor.";
console.log("\nMixed Feedback Test:");
processFeedback(mixedFeedback);

var shortFeedback = "Great!";
console.log("\nShort Feedback Test:");
processFeedback(shortFeedback);

function analyzeFeedbacks(feedbackArray) {
    console.log("\n--- Batch Feedback Analysis ---");
    var positiveCount = 0;
    var negativeCount = 0;
    
    for (var i = 0; i < feedbackArray.length; i++) {
        var result = processFeedback(feedbackArray[i]);
        if (result.type === "Positive Feedback") {
            positiveCount++;
        } else {
            negativeCount++;
        }
        console.log("---");
    }
    
    console.log("Summary:");
    console.log("Positive Feedbacks: " + positiveCount);
    console.log("Negative Feedbacks: " + negativeCount);
}

var feedbacks = [
    "Amazing product! Exceeded my expectations.",
    "Bad quality, not worth the price.",
    "Good value for money. Fast delivery.",
    "Poor customer service experience.",
    "Excellent quality and great sound!"
];

analyzeFeedbacks(feedbacks);