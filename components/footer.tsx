import Link from 'next/link';
import React from 'react';

import { CiLinkedin } from 'react-icons/ci';

export default function Footer() {
	const currentYear: number = new Date().getFullYear();

	return (
		<footer className='max-w-screen-2xl ml-auto mr-auto px-2 min-h-12 font-semibold flex items-center justify-between'>
			<div>
				{currentYear}
				<span className='text-primary'>&#169;</span> All Rights Reserved.
			</div>
			<div>
				Build With <span className='text-primary'>&#9825;</span> by JohnS
			</div>
			<Link
				href={'https://www.linkedin.com/in/john-santamaria-dev/'}
				target='_blank'
				className='hover:text-primary active:scale-[.98] transition-transform duration-300 flex items-center gap-2'
			>
				Di Hola
				<CiLinkedin className='w-auto h-5 text-primary' />
			</Link>
			<div className='select-text '>
				<p>jhonrincon.fs@academia.umb.edu.co</p>
			</div>
		</footer>
	);
}
