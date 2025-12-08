'use client'

import Link from 'next/link';
import Logo from '@/components/ui/logo';

export default function LogoLink() {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<Link href="/" onClick={handleClick}>
			<Logo/>
		</Link>
	);
}

