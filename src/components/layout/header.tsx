"use client"

import Link from 'next/link';
import Logo from '@/components/ui/logo';

const navigation = [
	{ name: 'Услуги', href: '#services' },
	{ name: 'О нас', href: '#about' },
	{ name: 'Портфолио', href: '#portfolio' }
];


export default function Header() {
	return (
		<header>
			<div className="flex items-center justify-between h-[50px] px-[20px] md:px-[60px]">
				<Link href="/">
					<Logo />
				</Link>

			</div>
		</header>
	)
}