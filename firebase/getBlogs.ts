import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebase_app } from '@/firebase/config';
import { BlogType } from '@/types/blogById';

const db = getFirestore(firebase_app);

export async function getAllBlogs(): Promise<BlogType[]> {
	try {
		// Obtener todos los documentos de la colección "blogs"
		const blogsCollection = collection(db, 'blogs');
		const querySnapshot = await getDocs(blogsCollection);

		// Convertir los documentos en un array de objetos BlogType
		const blogs: BlogType[] = querySnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		})) as BlogType[];
		return blogs;
	} catch (error) {
		console.error('Error fetching all blogs:', error);
		throw error;
	}
}
