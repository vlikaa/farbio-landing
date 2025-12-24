import NavigationBar from '@/components/ui/navigation-bar';
import CustomButton from '@/components/ui/custom-button';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { getTranslations } from 'next-intl/server';
import BurgerMenu from '@/components/ui/burger-menu';
import LogoLink from '@/components/ui/logo-link';

const navigationKeys = [
	{ key: 'services', href: '#services' },
	{ key: 'about', href: '#about' },
	{ key: 'reviews', href: '#reviews' },
	{ key: 'portfolio', href: '#portfolio' }
];


export default async function Header() {
	const t = await getTranslations('Header');

	const navigation = navigationKeys.map(item => ({
		name: t(item.key),
		href: item.href
	}));

	return (
		<header id="header" className="sticky z-20 top-0 left-0 bg-white">
			<div
				className="flex justify-between items-center px-[20px] py-[5px] xl:grid md:grid-cols-3 md:px-[60px] 2xl:px-[100px] 2xl:py-[20px]">
				<div className="flex justify-start">
					<LogoLink/>
				</div>

				<div className="flex justify-center">
					<NavigationBar items={ navigation }/>
				</div>

				<div className="hidden xl:flex justify-end items-center gap-[20px] 2xl:gap-[60px]">
					<LanguageSwitcher/>
					<a
						href="tel:+994506748535"
						className="text-[12px] font-semibold font-inter flex items-center justify-center rounded-md h-[30px] w-[177px] bg-[#00823F] text-white cursor-pointer hover:opacity-90"
					>
						{ t('call') }
					</a>

				</div>

				<div className="justify-end xl:hidden">
					<BurgerMenu items={ navigation }/>
				</div>
			</div>
		</header>
	)
}