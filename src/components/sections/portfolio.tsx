import { getTranslations } from 'next-intl/server';
import SectionTitle from '@/components/ui/section-title';
import Gallery from '@/components/ui/gallery';

export default async function Portfolio() {
	const t = await getTranslations('Portfolio');

	const images = [
		'/images/portfolio/img.png',
		'/images/portfolio/img_1.png',
		'/images/portfolio/img_2.png',
		'/images/portfolio/img_3.png',
		'/images/portfolio/img_4.png',
		'/images/portfolio/img_5.png',
		'/images/portfolio/img_6.png',
		'/images/portfolio/img_7.png',
		'/images/portfolio/img_8.png',
		'/images/portfolio/img_9.png',
		'/images/portfolio/img_10.png',
		'/images/portfolio/img_11.png',
		'/images/portfolio/img_12.png',
		'/images/portfolio/img_13.png',
		'/images/portfolio/img_14.png',
		'/images/portfolio/img_15.png',
	];

	return (
		<div id="portfolio" className="relative w-full min-h-[877px] pb-[50px] pt-[100px] md:py-[100px] px-4 md:px-6 bg-white xl:py-[100px] 2xl:py-[200px]">
			<div className="flex flex-col items-center">
				<SectionTitle title={t('tag')} />

				<h2 className="mt-[20px] mb-[40px] text-[26px] font-inter font-bold text-center md:mt-[40px] md:text-[48px] md:font-roboto md:font-extrabold xl:mb-[60px] 2xl:mb-[100px]">
					{t.rich('title', {
						green: (chunks) => <span className="text-[#00823F]">{chunks}</span>
					})}
				</h2>

				<Gallery
					images={images}
					initialImagesCount={8}
					translations={{
						tag: t('tag'),
						viewMore: t('viewMore'),
						viewLess: t('viewLess')
					}}
				/>
			</div>
		</div>
	);
}