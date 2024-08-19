'use client';
import BackButton from '@/components/backbutton';
import Card from '@/components/card';
import CustomLayout from '@/components/customLayout';
import Title from '@/components/title';
import { getAllBlogs } from '@/firebase/getBlogs';
import { BlogType } from '@/types/blogById';
import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css'; // Asegúrate de que esto esté importado

export default function Blog() {
	const [blogs, setBlogs] = useState<BlogType[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		(async () => {
			try {
				const blogs = await getAllBlogs();
				setBlogs(blogs);
			} catch {
				console.log('errror');
			} finally {
				setIsLoading(false);
			}
		})();
	}, []);

	return (
		<CustomLayout>
			<BackButton />
			<Title>Blogs</Title>
			<section className='mt-4 grid grid-cols-3 gap-3'>
				{blogs.map((blog) => (
					<Card
						key={blog.id}
						blog={blog}
					/>
				))}
			</section>
		</CustomLayout>
	);
}
