import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { firebase_app } from '@/firebase/config';
import { BlogType } from '@/types/blogById';

const db = getFirestore(firebase_app);

export async function createBlog(blog: Omit<BlogType, 'id' | 'createdAt'>): Promise<BlogType> {
	try {
		// Añadir un nuevo documento a la colección "blogs"
		const docRef = await addDoc(collection(db, 'blogs'), {
			...blog,
			createdAt: serverTimestamp(), // Agrega la marca de tiempo del servidor
		});

		// Retornar el blog creado con el ID del documento
		return { id: docRef.id, ...blog, createdAt: new Date() } as BlogType;
	} catch (error) {
		console.error('Error creating blog:', error);
		throw error;
	}
}
