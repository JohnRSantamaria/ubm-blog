import { useState, useEffect } from 'react';
import { collection, getDocs, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { db } from '@/firebase/config';

interface Question {
    id: string;
    questionText: string;
    author: string;
    createdAt: Date;
}

export const useFetchQuestions = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(collection(db, 'questions'));
                const questionsData: Question[] = querySnapshot.docs.map((doc) => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        questionText: data.questionText,
                        author: data.author,
                        createdAt: data.createdAt.toDate(),
                    } as Question;
                });
                setQuestions(questionsData);
            } catch (err) {
                setError('Error fetching questions');
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    return { questions, loading, error };
};
