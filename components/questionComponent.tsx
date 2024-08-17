import { useQuestions } from '@/hooks/useQuestions';
import React, { useState } from 'react';

interface QuestionComponentProps {
	questionId?: string;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({ questionId }) => {
	const { createQuestion, answerQuestion, error } = useQuestions();
	const [questionText, setQuestionText] = useState('');
	const [author, setAuthor] = useState('');
	const [answerText, setAnswerText] = useState('');

	const handleCreateQuestion = async () => {
		const id = await createQuestion({ questionText, author });
		if (id) {
			// Usa el ID devuelto de la pregunta recién creada
			questionId = id;
		}
	};

	const handleAnswerQuestion = async () => {
		if (!questionId) {
			alert('Por favor crea una pregunta primero o selecciona una pregunta válida.');
			return;
		}
		await answerQuestion({ questionId, answerText, author });
		setAnswerText('');
	};

	return (
		<div>
			<h1>Crear Pregunta</h1>
			<input
				type='text'
				placeholder='Pregunta'
				value={questionText}
				onChange={(e) => setQuestionText(e.target.value)}
			/>
			<input
				type='text'
				placeholder='Autor'
				value={author}
				onChange={(e) => setAuthor(e.target.value)}
			/>
			<button onClick={handleCreateQuestion}>Crear Pregunta</button>

			<h1>Responder Pregunta</h1>
			<input
				type='text'
				placeholder='Respuesta'
				value={answerText}
				onChange={(e) => setAnswerText(e.target.value)}
			/>
			<button onClick={handleAnswerQuestion}>Responder Pregunta</button>

			{error && <p>Error: {error.message}</p>}
		</div>
	);
};

export default QuestionComponent;
