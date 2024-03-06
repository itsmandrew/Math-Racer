

const generateMathProblem = () => {
    const num1 = Math.ceil(Math.random() * 12);
    const num2 = Math.ceil(Math.random() * 12);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    
    const calculateAnswer = (a, b, op) => {
        switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        default: throw new Error('Invalid operator');
        }
    };
    
    const answer = calculateAnswer(num1, num2, operator);
    const wrongAnswers = [];
    
    while (wrongAnswers.length < 3) {
        const wrongAnswer = Math.ceil(Math.random() * 20);
        if (wrongAnswer !== answer && !wrongAnswers.includes(wrongAnswer)) {
        wrongAnswers.push(wrongAnswer);
        }
    }
    
    const choices = [...wrongAnswers, answer];
    choices.sort(() => 0.5 - Math.random()); // Shuffle the choices
    
    return { problem: `${num1} ${operator} ${num2}`, choices, correctAnswer: answer };
};

export default generateMathProblem;