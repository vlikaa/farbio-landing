'use client'

import { useTranslations } from 'use-intl';
import SectionTitle from '@/components/ui/section-title';
import { ReviewCard } from '@/components/ui/review-card';
import AvatarIcon from '@/components/icons/avatar-icon';
import { Marquee } from '@/components/ui/marquee';

export default function Reviews() {
	const t = useTranslations('Reviews');
	const reviews = t.raw('items') as Array<{ text: string }>;

	const reviewsSet = [...reviews];

	return (
		<section className="py-[50px] md:py-[100px] bg-gradient-to-b from-[#00D969]/30 via-white to-white">
			<div className="flex flex-col items-center">
				<SectionTitle title={ t('tag') }/>

				<h2 className="w-[335px] mt-[20px] mb-[40px] text-[26px] font-inter font-bold text-center md:mt-[40px] md:mb-[60px] md:w-[650px] md:text-[48px] md:font-extrabold md:font-roboto">
					{ (() => {
						const title = t('title');
						const highlightWord = title.includes('говорят') ? 'говорят' : title.includes('deyir') ? 'deyir' : '';
						if (highlightWord) {
							const parts = title.split(highlightWord);
							return (
								<>
									<span className="text-[#2D2D2D]">{ parts[0] }</span>
									<span className="text-[#00823F]">{ highlightWord }</span>
									<span className="text-[#2D2D2D]">{ parts[1] }</span>
								</>
							);
						}
						return <span className="text-[#2D2D2D]">{ title }</span>;
					})() }
				</h2>

				<div className="relative w-full overflow-hidden">
					<Marquee pauseOnHover={true}>
						{ reviewsSet.map((review, index) => (
							<ReviewCard icon={ <AvatarIcon /> } stars={5} key={ `first-${ index }` } text={ review.text }/>
						)) }
					</Marquee>
				</div>
			</div>
		</section>
	);
}
