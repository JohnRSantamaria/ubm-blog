import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';

// Configuración de Firebase para tu aplicación web
const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATA_BASE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBSE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
};

// Inicializar Firebase
let firebase_app = getApps()?.length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Inicializar Firestore
const db = getFirestore(firebase_app);

export { db, firebase_app };
