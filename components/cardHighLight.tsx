import { BlogType } from '@/types/blogById';
import React from 'react';
import { Timestamp } from 'firebase/firestore'; // Asegúrate de importar Timestamp si es necesario

interface CardHighLightProps {
	blog: BlogType;
}

export default function CardHighLight({ blog }: CardHighLightProps) {
	// Convierte el Timestamp a Date si es necesario
	const createdAtDate = blog.createdAt instanceof Timestamp ? blog.createdAt.toDate() : new Date(blog.createdAt);

	// Formatea la fecha y la hora
	const formattedDate = createdAtDate.toLocaleDateString();
	const formattedTime = createdAtDate.toLocaleTimeString();

	return (
		<div className='flex flex-col items-center justify-center p-2 w-full h-full bg-light rounded-md shadow select-none'>
			<h2>{blog.title}</h2>
			<p className='font-semibold'>{blog.overview}</p>
			<p>
				{formattedDate} - {formattedTime}
			</p>
		</div>
	);
}
