'use client'

import Link from 'next/link';
import Logo from '@/components/ui/logo';
import NavigationBar from '@/components/ui/navigation-bar';
import Button from '@/components/ui/button';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { useTranslations } from 'use-intl';

const navigationKeys = [
	{ key: 'services', href: '#services' },
	{ key: 'about', href: '#about' },
	{ key: 'portfolio', href: '#portfolio' }
];


export default function Header() {
	const t = useTranslations('Header');

	const navigation = navigationKeys.map(item => ({
		name: t(item.key),
		href: item.href
	}));


	return (
		<header className="sticky z-20 top-0 left-0 bg-white">
			<div className="grid grid-cols-3 items-center h-[50px] px-[20px] md:px-[60px]">
				<div className="flex justify-start">
					<Link href="/">
						<Logo/>
					</Link>
				</div>

				<div className="flex justify-center">
					<NavigationBar items={navigation}/>
				</div>

				<div className="flex justify-end gap-[20px]">
					<LanguageSwitcher />
					<Button className="flex items-center justify-center rounded-md h-[30px] w-[177px] bg-[#00823F] text-white cursor-pointer hover:opacity-90" title={t('call')}/>
				</div>
			</div>
		</header>
	)
}