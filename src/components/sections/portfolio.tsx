'use client'

import { useState } from 'react';
import { useTranslations } from 'use-intl';
import SectionTitle from '@/components/ui/section-title';
import { PortfolioImage } from '@/components/ui/portfolio-image';


export default function Portfolio() {
	const t = useTranslations('Portfolio');
	const [showAll, setShowAll] = useState(false);

	const initialImages = 8;
	const additionalImages = 8;

	return (
		<div id="portfolio" className="relative w-full min-h-[877px] py-[50px] md:py-[100px] px-4 md:px-6 bg-white">
			<div className="flex flex-col items-center">
				<SectionTitle title={ t('tag') }/>

				<h2 className="mt-[20px] mb-[40px] text-[26px] font-inter font-bold text-center md:mt-[40px] md:text-[48px] md:font-roboto md:font-extrabold xl:mb-[60px]">
					{ (() => {
						const title = t('title');
						const highlightWords = ['проекты', 'layihələr'];
						const highlightWord = highlightWords.find(word => title.includes(word));

						if (highlightWord) {
							const parts = title.split(highlightWord);
							return (
								<>
									<span className="text-[#2D2D2D]">{ parts[0] }</span>
									<span className="text-[#00823F]">{ highlightWord }</span>
									{ parts[1] && <span className="text-[#2D2D2D]">{ parts[1] }</span> }
								</>
							);
						}
						return <span className="text-[#2D2D2D]">{ title }</span>;
					})() }
				</h2>

				<div className="w-full max-w-[335px] md:max-w-5xl mb-8 md:mb-12">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
						{ Array.from({ length: initialImages }).map((_, index) => (
							<PortfolioImage key={ index } index={ index }/>
						)) }

						{ showAll && Array.from({ length: additionalImages }).map((_, index) => (
							<PortfolioImage key={ `additional-${ index }` } index={ initialImages + index }/>
						)) }
					</div>
				</div>

				<button
					onClick={ () => setShowAll(!showAll) }
					className="text-[18px] md:text-[20px] font-roboto font-extrabold leading-[36px] text-[#00572A] underline hover:opacity-80 transition-opacity"
				>
					{ t('viewMore') }
				</button>
			</div>
		</div>
	);
}
