import React from 'react';

interface RedirectProps {
	text: string;
}

export default function SaveButton({ text }: RedirectProps) {
	return (
		<button
			className='ml-auto border rounded-md px-8 py-2 text-xl bg-primary border-primary text-light active:scale-95 transition-all duration-300 hover:opacity-85 max-w-screen-sm'
			type='submit'
		>
			{text}
		</button>
	);
}
