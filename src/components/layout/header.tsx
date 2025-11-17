'use client'

import Link from 'next/link';
import Logo from '@/components/ui/logo';
import NavigationBar from '@/components/ui/navigation-bar';
import Button from '@/components/ui/button';
import LanguageSwitcher from '@/components/ui/language-switcher';

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
					<Logo/>
				</Link>

				<NavigationBar items={ navigation }/>

				<div className="flex gap-[20px]">
					<LanguageSwitcher/>
					<Button title={ 'позвонить' }/>
				</div>
			</div>
		</header>
	)
}