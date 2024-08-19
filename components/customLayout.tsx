import React, { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

export default function CustomLayout({ children }: LayoutProps) {
	return (
		<div className='text-dark max-w-screen-2xl ml-auto mr-auto h-[calc(100vh-6rem)] p-2 font-semibold  overflow-y-scroll'>
			{children}
		</div>
	);
}
