import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/section-title';
import { ReviewCard } from '@/components/ui/review-card';
import { Marquee } from '@/components/ui/marquee';

type Review = {
	id?: number;
	name?: string;
	text: string;
	rating?: number;
	avatar?: string;
};

export default async function Reviews() {
	const t = await getTranslations('Reviews');

	let localizedReviews: Review[] = [];

	try {
		const items = t.raw('items');

		if (Array.isArray(items)) {
			localizedReviews = items as Review[];
		}
	} catch (error) {
		console.error('Failed to load localized reviews:', error);
	}

	return (
		<section id="reviews" className="pt-[50px] md:pt-[100px] bg-gradient-to-b from-[#00D969]/30 via-white to-white 2xl:pt-[200px]">
			<div className="flex flex-col items-center">
				<SectionTitle title={ t('tag') }/>

				<h2 className="w-[335px] mt-[20px] mb-[40px] text-[26px] font-inter font-bold text-center md:mt-[40px] md:mb-[60px] md:w-[650px] md:text-[48px] md:font-extrabold md:font-roboto 2xl:mb-[100px] xl:w-full">
					{ t.rich('title', {
						green: (chunks) => <span className="text-[#00823F]">{ chunks }</span>
					}) }
				</h2>

				<div className="relative w-full overflow-hidden">
					<Marquee pauseOnHover={true}>
						{ localizedReviews.map((review, index) => (
							<ReviewCard
								avatarPath={ review.avatar }
								stars={ review.rating ?? 5 }
								key={ review.id ? `review-${ review.id }` : `review-${ index }` }
								text={ review.text }
							/>
						)) }
					</Marquee>
				</div>
			</div>
		</section>
	);
}
