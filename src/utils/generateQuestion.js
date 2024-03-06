const generateMathProblem = () => {
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
  
    let num1, num2;
  
    if (operator === '/') {
      num1 = Math.floor(Math.random() * 12) + 1;
      const divisors = Array.from({ length: num1 }, (_, i) => i + 1).filter(
        (n) => num1 % n === 0
      );
      num2 = divisors[Math.floor(Math.random() * divisors.length)];
    } else {
      num1 = Math.floor(Math.random() * 13) + 1;
      num2 = Math.floor(Math.random() * 13) + 1;
  
      if (operator === '-' && num2 > num1) {
        [num1, num2] = [num2, num1];
      }
    }
  
    const calculateAnswer = (a, b, op) => {
      switch (op) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          return a / b;
        default:
          throw new Error('Invalid operator');
      }
    };
  
    const answer = calculateAnswer(num1, num2, operator);
    const wrongAnswers = new Set();
  
    while (wrongAnswers.size < 3) {
      let wrongAnswer;
      do {
        const offset = Math.floor(Math.random() * 3) + 1;
        const sign = Math.random() < 0.5 ? 1 : -1;
        wrongAnswer = answer + sign * offset;
      } while (wrongAnswer <= 0 || wrongAnswer === answer);
      wrongAnswers.add(wrongAnswer);
    }
  
    const problem = `${num1} ${operator} ${num2}`;
    const choices = [...wrongAnswers, answer];
    choices.sort(() => 0.5 - Math.random()); // Shuffle the choices
  
    return { problem, choices, correctAnswer: answer };
  };
  
  export default generateMathProblem;