import Link from 'next/link';
import React from 'react';

export default function Footer() {
	const currentYear: number = new Date().getFullYear();

	return (
		<footer className='max-w-screen-2xl ml-auto mr-auto px-2 min-h-12 font-semibold flex justify-between'>
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
				className='hover:text-primary active:scale-[.98] transition-transform duration-300'
			>
				Say hello
			</Link>
		</footer>
	);
}
