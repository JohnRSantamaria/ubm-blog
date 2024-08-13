'use client';

import React from 'react';
import Image from 'next/image';
import imgLogo from '@/public/img/Escudo_UMB.png';
import { useRouter } from 'next/navigation';

export default function Hero() {
	const router = useRouter();

	const handleClick = () => {
		router.push('blog');
	};

	return (
		<div className='shadow-md rounded-lg bg-white py-8 px-2 flex items-center justify-between gap-8'>
			<span className='w-1/2 '>
				<Image
					src={imgLogo}
					alt='Logo de la universidad manuela beltran, Colombia'
					className='drop-shadow-2xl'
				/>
			</span>
			<span className='w-1/2 flex flex-col items-center gap-16 justify-evenly'>
				<h1 className='text-4xl text-center font-bold'>TECNICAS PARA LA COMUNICACION VIRTUAL </h1>
				<span>
					<p className='text-xl font-semibold'>
						¡Crea un blog para compartir conocimientos con las personas que quieras!
					</p>
				</span>
				<button
					className='border rounded-md px-8 py-2 text-xl bg-primary border-primary text-light active:scale-95 transition-all duration-300'
					onClick={handleClick}
				>
					Crea tu blog
				</button>
			</span>
		</div>
	);
}
