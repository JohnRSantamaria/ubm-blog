import React, { useState } from 'react';
import { useFetchQuestions } from '../hooks/useFetchQuestions';
import QuestionComponent from './questionComponent';

const QuestionsList = () => {
	const { questions, loading, error } = useFetchQuestions();
	const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);

	if (loading) {
		return <p>Cargando preguntas...</p>;
	}

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<div>
			<h2>Lista de Preguntas</h2>
			<ul>
				{questions.map((question) => (
					<li
						key={question.id}
						onClick={() => setSelectedQuestionId(question.id)}
					>
						<p>
							<strong>{question.author}</strong>: {question.questionText}
						</p>
						<p>
							<em>Fecha: {question.createdAt.toLocaleString()}</em>
						</p>
					</li>
				))}
			</ul>

			{selectedQuestionId && <QuestionComponent questionId={selectedQuestionId} />}
		</div>
	);
};

export default QuestionsList;
