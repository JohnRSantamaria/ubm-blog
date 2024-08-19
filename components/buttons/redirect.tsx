import React from 'react';

interface RedirectProps {
	handleClick: () => void;
	text: string;
}

export default function Redirect({ handleClick, text }: RedirectProps) {
	return (
		<button
			className='border rounded-md px-8 py-2 text-xl bg-primary border-primary text-light active:scale-95 transition-all duration-300 hover:opacity-85'
			onClick={handleClick}
		>
			{text}
		</button>
	);
}
