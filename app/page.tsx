'use client';
import CustomLayout from '@/components/customLayout';
import Hero from '@/components/hero';
import Highlights from '@/components/highlights';
import { getRecentBlogs } from '@/firebase/getThreeBlogs';
import { BlogType } from '@/types/blogById';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';

export default function Home() {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [blogs, setBlogs] = useState<BlogType[]>([]);

	useEffect(() => {
		(async () => {
			try {
				const recentBlogs = await getRecentBlogs();
				setBlogs(recentBlogs);
			} catch (error: any) {
				console.log(error.message);
			} finally {
				setIsLoading(false);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<CustomLayout>
			<Hero />
			<Highlights
				blogs={blogs}
				isLoading={isLoading}
			/>
		</CustomLayout>
	);
}
