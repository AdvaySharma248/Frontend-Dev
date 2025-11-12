const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

const operators = ['+', '-', '*', '/'];

const randomOperator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (randomOperator) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        if (num2 !== 0) {
            correctAnswer = parseFloat((num1 / num2).toFixed(2));
        } else {
            const newNum2 = Math.floor(Math.random() * 20) + 1;
            correctAnswer = parseFloat((num1 / newNum2).toFixed(2));
        }
        break;
    default:
        correctAnswer = 0;
}

console.log("=== Random Math Quiz Generator ===");
console.log(`Question: ${num1} ${randomOperator} ${num2} = ?`);
console.log(`Correct Answer: ${correctAnswer}`);

console.log("\n--- Multiple Quiz Questions ---");

for (let i = 1; i <= 5; i++) {
    generateMathQuestion(`Question ${i}`);
}

function generateMathQuestion(questionLabel) {
    const number1 = Math.floor(Math.random() * 20) + 1;
    const number2 = Math.floor(Math.random() * 20) + 1;
    
    const op = operators[Math.floor(Math.random() * operators.length)];
    
    let answer;
    
    switch (op) {
        case '+':
            answer = number1 + number2;
            break;
        case '-':
            answer = number1 - number2;
            break;
        case '*':
            answer = number1 * number2;
            break;
        case '/':
            if (number2 !== 0) {
                answer = parseFloat((number1 / number2).toFixed(2));
            } else {
                const safeNum2 = Math.floor(Math.random() * 20) + 1;
                answer = parseFloat((number1 / safeNum2).toFixed(2));
            }
            break;
        default:
            answer = 0;
    }
    
    console.log(`\n${questionLabel}: ${number1} ${op} ${number2} = ?`);
    console.log(`Correct Answer: ${answer}`);
}

console.log("\n--- Special Test Cases ---");

console.log("Testing division with zero prevention:");
generateMathQuestionWithZeroCheck();

function generateMathQuestionWithZeroCheck() {
    const n1 = Math.floor(Math.random() * 20) + 1;
    const n2 = 0;
    const op = '/';
    
    console.log(`Special Case: ${n1} ${op} ${n2} = ?`);
    
    if (n2 === 0) {
        const safeDivisor = Math.floor(Math.random() * 20) + 1;
        const result = parseFloat((n1 / safeDivisor).toFixed(2));
        console.log(`Adjusted (dividing by ${safeDivisor}): ${result}`);
    }
}