// services/blogService.ts
import { getFirestore, collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { firebase_app } from '@/firebase/config';
import { BlogType } from '@/types/blogById';

const db = getFirestore(firebase_app);

export async function getRecentBlogs(): Promise<BlogType[]> {
	try {
		// Crear una consulta para ordenar por fecha de creación en orden descendente y limitar a 3 documentos
		const blogsCollection = collection(db, 'blogs');
		const q = query(blogsCollection, orderBy('createdAt', 'desc'), limit(3));
		const querySnapshot = await getDocs(q);

		// Convertir los documentos en un array de objetos BlogType
		const blogs: BlogType[] = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		})) as BlogType[];

		return blogs;
	} catch (error) {
		console.error('Error fetching recent blogs:', error);
		throw error;
	}
}
