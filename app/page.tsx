import CustomLayout from '@/components/customLayout';
import Hero from '@/components/hero';
import Highlights from '@/components/highlights';

export default function Home() {
	return (
		<CustomLayout>
			<Hero />
			<Highlights />
		</CustomLayout>
	);
}
