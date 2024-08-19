import { BlogType } from '@/types/blogById';
import React from 'react';
import CardHighLight from './cardHighLight';
import { useRouter } from 'next/navigation';

interface HighlightsProps {
	blogs: BlogType[];
	isLoading: boolean;
}

export default function Highlights({ blogs, isLoading }: HighlightsProps) {
	const router = useRouter();

	const handleClick = () => {
		router.push('blog');
	};

	return (
		<div
			className='rounded-md shadow-lg bg-white  mt-8 w-full h-56 p-4 cursor-pointer '
			onClick={handleClick}
		>
			<div className='grid grid-cols-3 h-full gap-3 '>
				{blogs.map((blog) => (
					<CardHighLight
						key={blog.id}
						blog={blog}
					/>
				))}
			</div>
		</div>
	);
}
