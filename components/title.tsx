import React from 'react';

interface TitleProps {
	className?: string;
	children: React.ReactNode;
}

export default function Title({ className, children }: TitleProps) {
	return <h1 className={`text-4xl text-center ${className} `}>{children}</h1>;
}
