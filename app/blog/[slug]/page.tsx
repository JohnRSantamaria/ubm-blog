'use client';
import BackButton from '@/components/backbutton';
import CustomLayout from '@/components/customLayout';
import { getBlogBySlug } from '@/firebase/getBlogBySlug';
import { BlogType } from '@/types/blogById';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css'; // Asegúrate de que esto esté importado

export default function BlogId() {
	const { slug } = useParams();
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [blog, setBlog] = useState<BlogType>();

	useEffect(() => {
		(async () => {
			try {
				const blogBySlug = await getBlogBySlug(slug as string);
				if (!blogBySlug) return;

				setBlog(blogBySlug);
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [slug]);

	return (
		<CustomLayout>
			<BackButton />
			<div className='h-full flex flex-col gap-2 items-center justify-center'>
				{blog ? (
					<div className='p-4 flex flex-col items-center  justify-center'>
						<h2>{blog.title}</h2>
						<div dangerouslySetInnerHTML={{ __html: blog.content }} />
					</div>
				) : (
					<div></div>
				)}
			</div>
		</CustomLayout>
	);
}
