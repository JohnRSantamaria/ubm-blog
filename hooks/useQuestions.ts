import { useState } from 'react';
import { collection, addDoc, FirestoreError, doc, DocumentReference } from 'firebase/firestore';
import { db } from '@/firebase/config';

interface Question {
	questionText: string;
	author: string;
}

interface Answer {
	questionId: string;
	answerText: string;
	author: string;
}

export const useQuestions = () => {
	const [error, setError] = useState<FirestoreError | null>(null);

	const createQuestion = async (question: Question) => {
		try {
			const docRef = await addDoc(collection(db, 'questions'), {
				...question,
				createdAt: new Date(),
			});
			return docRef.id;
		} catch (err) {
			setError(err as FirestoreError);
		}
	};

	const answerQuestion = async (answer: Answer) => {
		try {
			// Asegúrate de que `questionId` sea una referencia a un documento válido
			const questionRef: DocumentReference = doc(db, 'questions', answer.questionId);

			// Agrega la respuesta a la subcolección 'answers'
			const docRef = await addDoc(collection(questionRef, 'answers'), {
				answerText: answer.answerText,
				author: answer.author,
				createdAt: new Date(),
			});

			return docRef.id;
		} catch (err) {
			setError(err as FirestoreError);
		}
	};

	return { createQuestion, answerQuestion, error };
};
