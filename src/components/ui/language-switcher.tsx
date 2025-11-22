'use client'

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newLocale = e.target.value;
		router.replace(pathname, { locale: newLocale });
	};

	return (
		<select
			value={ locale }
			onChange={ handleLanguageChange }
			className="font-inter font-light text-[16px] cursor-pointer"
		>
			{ routing.locales.map((loc) => (
				<option
					key={ loc }
					value={ loc }
					className="cursor-pointer"
					style={{ 
						color: 'red', 
						backgroundColor: '#333',
						fontSize: '14px'
					}}
				>
					{ loc.toUpperCase() }
				</option>
			)) }
		</select>
	);
}