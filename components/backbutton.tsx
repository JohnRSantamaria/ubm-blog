'use client';
import { useRouter } from 'next/navigation';

function BackButton() {
	const router = useRouter();
	return (
		<div className='flex justify-end'>
			<button
				className='font-semibold'
				onClick={() => {
					router.back();
				}}
			>
				<div className='active:scale-95 hover:text-primary '>&#129028; Volver</div>
			</button>
		</div>
	);
}

export default BackButton;
