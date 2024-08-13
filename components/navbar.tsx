import Link from 'next/link';
import React from 'react';

function Logo() {
	return (
		<h1 className='text-4xl font-extrabold tracking-widest box-content'>
			<Link href={'/'}>UMB</Link>
		</h1>
	);
}



export default function Navbar() {
	return (
		<div className='max-w-screen-2xl ml-auto mr-auto px-2 min-h-12 flex justify-between items-center font-semibold '>
			<Logo />
		</div>
	);
}
