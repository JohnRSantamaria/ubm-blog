'use client';
import CustomLayout from '@/components/customLayout';
import FormBlog from '@/components/forms/creaTuBlog';
import Title from '@/components/title';
import React from 'react';
import 'react-quill/dist/quill.snow.css'; // Asegúrate de que esto esté importado

export default function page() {
	return (
		<CustomLayout>
			<Title>Crea tu Blog</Title>
			<FormBlog />
		</CustomLayout>
	);
}
