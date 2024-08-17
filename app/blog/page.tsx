'use client';
import BackButton from '@/components/backbutton';
import CustomLayout from '@/components/customLayout';
import QuestionComponent from '@/components/questionComponent';

import QuestionsList from '@/components/QuestionsList';
import React from 'react';

export default function Blog() {
	return (
		<CustomLayout>
			<BackButton />
			<h1>Gestión de Preguntas</h1>
			<QuestionComponent />
			<QuestionsList />
		</CustomLayout>
	);
}
