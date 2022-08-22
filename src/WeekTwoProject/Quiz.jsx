import {useState} from 'react'
import './Quiz.css'
function Quiz() {
    const questions = [
		{
			questionText: 'syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables?',
			answerOptions: [
				{ answerText: 'asynchronous ', isCorrect: false },
				{ answerText: 'Rest parameter ', isCorrect: false },
				{ answerText: 'Destructuring assignment ', isCorrect: true },
				{ answerText: 'Default Parameter ', isCorrect: false },
			],
		},
		{
			questionText: 'syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic function in JavaScript?',
			answerOptions: [
				{ answerText: 'asynchronous ', isCorrect: false },
				{ answerText: 'Rest parameter ', isCorrect: true },
				{ answerText: 'Destructuring assignment ', isCorrect: false },
				{ answerText: 'Default Parameter ', isCorrect: false },
			],
		},
		{
			questionText: 'requiring you to extend from React Component and create a render function which returns a React element It must have the render () method ?',
			answerOptions: [
				{ answerText: 'Class Components', isCorrect: true },
				{ answerText: 'Functional Components', isCorrect: false },
				{ answerText: 'None Of them', isCorrect: false },
			],
		},
		{
			questionText: 'is just a plain JavaScript function that accepts props as argument and returns a React elements There is no render method?',
			answerOptions: [
				{ answerText: 'Class Components', isCorrect: false },
				{ answerText: 'Functional Components', isCorrect: true },
				{ answerText: 'None Of them', isCorrect: false },
			],
		},
		{
			questionText: 'function is a function passed into another function as an argument which is invoked inside the outer function to complete some kind of routine or action?',
			answerOptions: [
				{ answerText: 'Arrow Function', isCorrect: false },
				{ answerText: 'Function Declaration', isCorrect: false },
				{ answerText: 'Function Expresion', isCorrect: false },
				{ answerText: 'CallBack Function', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  return (
    <div className = "qiuz">
        {showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="btns" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
    </div>
  )
}

export default Quiz