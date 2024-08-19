import { BlogType } from '@/types/blogById';
import React from 'react';
import { useRouter } from 'next/navigation';

interface CardProps {
	blog: BlogType;
}

export default function Card({ blog }: CardProps) {
	const router = useRouter();

	const handleClick = () => {
		router.push(`blog/${blog.slug}`);
	};

	return (
		<div
			className='w-full p-4 rounded-md bg-white shadow-md cursor-pointer select-none'
			onClick={handleClick}
		>
			<h2>{blog.title}</h2>
			<span className='font-normal'>
				<p>{blog.overview}</p>
			</span>
		</div>
	);
}
