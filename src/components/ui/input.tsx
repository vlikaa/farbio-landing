'use client'

import { useTranslations } from 'next-intl'

interface InputProps {
	name: string;
	type?: 'text' | 'email' | 'tel' | 'password';
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	placeholder?: string;
	translationKey?: string;
	className?: string;
}

export function Input({
						  name,
						  type = 'text',
						  value,
						  onChange,
						  required = false,
						  placeholder,
						  translationKey,
						  className = ''
					  }: InputProps) {
	const t = useTranslations()

	const resolvedPlaceholder = translationKey
		? t(translationKey as string)
		: placeholder

	return (
		<input
			type={ type }
			name={ name }
			value={ value }
			onChange={ onChange }
			required={ required }
			placeholder={ resolvedPlaceholder }
			className={ `w-full flex items-center px-[15px] py-[17px] bg-white/30 border border-white/23 rounded-lg text-white placeholder-white/90 text-[12px] font-inter font-light focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200
        ${ className }
      ` }
		/>
	)
}