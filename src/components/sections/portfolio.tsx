'use client'

import { useState } from 'react';
import { useTranslations } from 'use-intl';
import SectionTitle from '@/components/ui/section-title';
import { PortfolioImage } from '@/components/ui/portfolio-image';


export default function Portfolio() {
	const t = useTranslations('Portfolio');
	const [showAll, setShowAll] = useState(false);

	const images = [
		'/images/portfolio/img.png',
		'/images/portfolio/img_1.png',
		'/images/portfolio/img_2.png',
		'/images/portfolio/img_3.png',
		'/images/portfolio/img_4.png',
		'/images/portfolio/img_5.png',
		'/images/portfolio/img_6.png',
		'/images/portfolio/img_7.png',
		'/images/portfolio/img.png',
		'/images/portfolio/img_1.png',
		'/images/portfolio/img_2.png',
		'/images/portfolio/img_3.png',
		'/images/portfolio/img_4.png',
		'/images/portfolio/img_5.png',
		'/images/portfolio/img_6.png',
		'/images/portfolio/img_7.png',
	];

	const initialImages = 8;
	const displayedImages = showAll ? images : images.slice(0, initialImages);

	return (
		<div id="portfolio" className="relative w-full min-h-[877px] pb-[50px] pt-[100px] md:py-[100px] px-4 md:px-6 bg-white xl:py-[100px] 2xl:py-[200px]">
			<div className="flex flex-col items-center">
				<SectionTitle title={ t('tag') }/>

				<h2 className="mt-[20px] mb-[40px] text-[26px] font-inter font-bold text-center md:mt-[40px] md:text-[48px] md:font-roboto md:font-extrabold xl:mb-[60px] 2xl:mb-[100px]">
					{ t.rich('title', {
						green: (chunks) => <span className="text-[#00823F]">{ chunks }</span>
					}) }
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-x-[10px] gap-y-[20px] mb-[40px] md:gap-x-[20px] md:gap-y-[30px] xl:mb-[60px] 2xl:grid-cols-6 2xl:mb-[100px]">
					{ displayedImages.map((src, index) => (
						<PortfolioImage key={ `${ src }-${ index }` } src={ src } alt={ `Portfolio image ${ index + 1 }` }/>
					)) }
				</div>

				<button
					onClick={ () => setShowAll(!showAll) }
					className="text-[18px] md:text-[20px] font-roboto font-extrabold text-[#00572A] underline hover:opacity-80 transition-opacity 2xl:text-[24px]"
				>
					{showAll ? t('viewLess') : t('viewMore')}
				</button>
			</div>
		</div>
	);
}
