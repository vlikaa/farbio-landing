'use client'

import { useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'use-intl';
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

export default function Reviews() {
	const t = useTranslations('Reviews');
	const [reviews, setReviews] = useState<Review[]>([]);
	const fallbackReviews = useMemo<Review[]>(() => {
		const items = t.raw('items') as Array<{ text: string }>;
		return items.map((item, index) => ({
			id: index,
			text: item.text,
		}));
	}, [t]);

	useEffect(() => {
		let isMounted = true;
		const controller = new AbortController();

		const fetchReviews = async () => {
			try {
				const response = await fetch('/api/reviews', {
					signal: controller.signal,
					cache: 'no-store',
				});

				if (!response.ok) {
					throw new Error('Failed to load reviews');
				}

				const data = (await response.json()) as Review[];

				if (isMounted) {
					setReviews(data);
				}
			} catch (error) {
				if (error instanceof DOMException && error.name === 'AbortError') {
					return;
				}

				if (process.env.NODE_ENV !== 'production') {
					console.error('Unable to load reviews', error);
				}
			}
		};

		fetchReviews();

		return () => {
			isMounted = false;
			controller.abort();
		};
	}, []);

	const reviewsSet = reviews.length ? reviews : fallbackReviews;

	return (
		<section id="reviews" className="py-[50px] md:py-[100px] bg-gradient-to-b from-[#00D969]/30 via-white to-white">
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
							<ReviewCard
								avatarPath={ undefined }
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
