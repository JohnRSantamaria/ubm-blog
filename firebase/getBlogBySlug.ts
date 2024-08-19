import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { firebase_app } from '@/firebase/config';
import { BlogType } from '@/types/blogById';

const db = getFirestore(firebase_app);

export async function getBlogBySlug(slug: string): Promise<BlogType | null> {
	try {
		// Consultar el documento en la colección "blogs" por slug
		const q = query(collection(db, 'blogs'), where('slug', '==', slug));
		const querySnapshot = await getDocs(q);

		// Verificar si se encontró un documento con el slug dado
		if (!querySnapshot.empty) {
			const docSnapshot = querySnapshot.docs[0];
			const blogData = docSnapshot.data();
			return { ...blogData, id: docSnapshot.id } as BlogType;
		} else {
			console.warn(`El documento con slug ${slug} no existe en la colección "blogs".`);
			return null;
		}
	} catch (error) {
		console.error('Error fetching blog by slug:', error);
		throw error;
	}
}
