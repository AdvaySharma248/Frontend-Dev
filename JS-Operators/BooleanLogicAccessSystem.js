var isDoorLocked = true;
var isWindowClosed = true;
var isAlarmOn = true;
var isOwnerInside = true;

function checkAccess() {
    if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
        console.log("Status: Secure");
        return "Secure";
    } else {
        console.log("Status: Unsafe");
        return "Unsafe";
    }
}

console.log("=== Boolean Logic Access System ===");
console.log("Door Locked: " + isDoorLocked);
console.log("Window Closed: " + isWindowClosed);
console.log("Alarm On: " + isAlarmOn);
console.log("Owner Inside: " + isOwnerInside);
console.log("Access Result: " + checkAccess());

console.log("\n--- Testing Different Scenarios ---");

console.log("\nTest Case 1: All conditions met");
isDoorLocked = true;
isWindowClosed = true;
isAlarmOn = true;
isOwnerInside = true;
console.log("Door Locked: " + isDoorLocked + ", Window Closed: " + isWindowClosed + 
            ", Alarm On: " + isAlarmOn + ", Owner Inside: " + isOwnerInside);
checkAccess();

console.log("\nTest Case 2: Door not locked");
isDoorLocked = false;
isWindowClosed = true;
isAlarmOn = true;
isOwnerInside = true;
console.log("Door Locked: " + isDoorLocked + ", Window Closed: " + isWindowClosed + 
            ", Alarm On: " + isAlarmOn + ", Owner Inside: " + isOwnerInside);
checkAccess();

console.log("\nTest Case 3: Window not closed");
isDoorLocked = true;
isWindowClosed = false;
isAlarmOn = true;
isOwnerInside = true;
console.log("Door Locked: " + isDoorLocked + ", Window Closed: " + isWindowClosed + 
            ", Alarm On: " + isAlarmOn + ", Owner Inside: " + isOwnerInside);
checkAccess();

console.log("\nTest Case 4: Alarm off");
isDoorLocked = true;
isWindowClosed = true;
isAlarmOn = false;
isOwnerInside = true;
console.log("Door Locked: " + isDoorLocked + ", Window Closed: " + isWindowClosed + 
            ", Alarm On: " + isAlarmOn + ", Owner Inside: " + isOwnerInside);
checkAccess();

console.log("\nTest Case 5: Owner not inside");
isDoorLocked = true;
isWindowClosed = true;
isAlarmOn = true;
isOwnerInside = false;
console.log("Door Locked: " + isDoorLocked + ", Window Closed: " + isWindowClosed + 
            ", Alarm On: " + isAlarmOn + ", Owner Inside: " + isOwnerInside);
checkAccess();

console.log("\nTest Case 6: Multiple conditions not met");
isDoorLocked = false;
isWindowClosed = false;
isAlarmOn = false;
isOwnerInside = false;
console.log("Door Locked: " + isDoorLocked + ", Window Closed: " + isWindowClosed + 
            ", Alarm On: " + isAlarmOn + ", Owner Inside: " + isOwnerInside);
checkAccess();