'use client'

import { useTranslations } from 'use-intl';
import CustomButton from '@/components/ui/custom-button';

export default function Hero() {
	const t = useTranslations('Hero');

	return (
		<section className="flex flex-col items-center bg-gradient-to-br from-[#00D366] to-[#006D35] py-[50px] md:py-[100px] 2xl:py-[200px]">
			<div className="flex justify-center items-center font-light w-[100px] xl:w-[176px] border-1 border-white/20 bg-white/20 rounded-[8px] text-[12px]">
				<p className="font-inter text-white">{ t('gardening') }</p>
			</div>

			<h1 className="mt-[20px] mb-[10px] md:mt-[40px] md:mb-[20px] text-[48px] md:text-[64px] text-white font-roboto font-extrabold text-center whitespace-pre-line leading-[48px] md:leading-[72px]">
				{ t('header') }
			</h1>

			<p className="mb-[40px] md:mb-[50px] text-[12px] md:text-[16px] text-white font-inter font-light text-center leading-[15px] md:leading-[20px] whitespace-pre-line 2xl:mb-[100px]">
				{ t('description') }
			</p>

			<CustomButton
				href="#consultation"
				title={ t('button') }
				className="flex justify-center items-center h-[40px] w-[176px] xl:h-[50px] xl:w-[200px] bg-white rounded-md text-[#00823F] hover:bg-[#CCF7E1] hover:text-[#00572A] cursor-pointer"
			/>

		</section>
	)
}
