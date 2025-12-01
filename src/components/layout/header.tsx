'use client'

import Link from 'next/link';
import Logo from '@/components/ui/logo';
import NavigationBar from '@/components/ui/navigation-bar';
import CustomButton from '@/components/ui/custom-button';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { useTranslations } from 'use-intl';
import { useState } from 'react';
import BurgerButton from '@/components/ui/burger-button';
import BurgerMenu from '@/components/ui/burger-menu';

const navigationKeys = [
	{ key: 'services', href: '#services' },
	{ key: 'about', href: '#about' },
	{ key: 'reviews', href: '#reviews' },
	{ key: 'portfolio', href: '#portfolio' }
];


export default function Header() {
	const t = useTranslations('Header');
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const handleMenuClose = () => {
		setIsMenuOpen(false)
	}


	const navigation = navigationKeys.map(item => ({
		name: t(item.key),
		href: item.href
	}));


	return (
		<header className="sticky z-20 top-0 left-0 bg-white">
			<div className="flex justify-between items-center px-[20px] py-[5px] xl:grid md:grid-cols-3 md:px-[60px] 2xl:px-[100px] 2xl:py-[20px]">
				<div className="flex justify-start">
					<Link href="/">
						<Logo/>
					</Link>
				</div>

				<div className="flex justify-center">
					<NavigationBar items={ navigation }/>
				</div>

				<div className="hidden xl:flex justify-end items-center gap-[20px] 2xl:gap-[60px]">
					<LanguageSwitcher/>
					<CustomButton
						href="#consultation"
						className="flex items-center justify-center rounded-md h-[30px] w-[177px] bg-[#00823F] text-white cursor-pointer hover:opacity-90"
						title={ t('call') }/>
				</div>

				<div className="justify-end xl:hidden">
					<BurgerButton isOpen={ isMenuOpen } onClick={ handleMenuToggle }/>
					<BurgerMenu isOpen={ isMenuOpen } onClose={ handleMenuClose } items={ navigation }/>
				</div>
			</div>
		</header>
	)
}