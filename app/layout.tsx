import type { Metadata } from 'next';

import { Antic_Didone } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const antic = Antic_Didone({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'UMB- Universidad manuela beltran ',
	description: 'Creado por John Santamaria, estudiante de ing de sistemas primer semestre.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={antic.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
