'use client'

import { useTranslations } from 'use-intl';
import SectionTitle from '@/components/ui/section-title';
import { StatItem } from '@/components/ui/stat-item';
import Image from 'next/image';

export default function About() {
	const t = useTranslations('About');

	return (
		<section id="about" className="relative overflow-hidden ">
			<div className="flex flex-col items-center py-[50px] md:py-[100px] px-[20px] md:px-[60px] 2xl:px-[120px]">
				<SectionTitle title={ t('tag') }/>

				<div className="flex flex-col items-center xl:self-start xl:flex xl:flex-col xl:items-start xl:w-[570px] xl:gap-[10px]">
					<h2 className="mt-[20px] xl:mt-[40px] mb-[10px] text-[27px] md:text-[48px] font-inter font-bold md:font-roboto md:font-extrabold text-center leading-[31px] md:leading-[48px] xl:text-left">
						<span className="text-[#00823F]">15+</span>
						<span className="text-[#2D2D2D]"> { t('title').replace(/^15\+\s*/, '') }</span>
					</h2>

					<p className="w-full max-w-[294px] md:max-w-[650px] mb-8 md:mb-15 text-[12px] md:text-[16px] font-inter font-extralight text-center leading-[15px] md:leading-[20px] md:font-light text-[#2D2D2D] xl:text-left">
						{ t('description') }
					</p>
				</div>
				<div className="w-full flex justify-between">
					<div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-x-[10px] xl:gap-x-[135px]">
						<StatItem
							label={ t('stats.affordable.label') }
							value={ t('stats.affordable.value') }
						/>
						<StatItem
							label={ t('stats.quality.label') }
							value={ t('stats.quality.value') }
						/>
						<StatItem
							label={ t('stats.clients.label') }
							value={ t('stats.clients.value') }
							className="md:row-start-1 md:col-start-2"
						/>
						<StatItem
							label={ t('stats.plants.label') }
							value={ t('stats.plants.value') }
						/>
					</div>

					<div>
						<div
							className="absolute right-[8px] bottom-[110px] w-[200px] h-[100px] bg-[#CCF7E1] rounded-xl md:w-[314px] md:h-[139px] md:right-[60px] md:bottom-[45px] xl:w-[472px] xl:h-[247px] xl:bottom-[201px] 2xl:right-[120px]"/>

						<Image
							src="/images/gardener.webp"
							alt="gardener img"
							width={ 216 }
							height={ 289 }
							className="absolute bottom-0 right-0 md:bottom-[-425px] md:right-[-60px] md:w-[561px] md:h-[748px] xl:w-[428px] xl:h-[571px] xl:bottom-0 xl:right-[82px] 2xl:right-[164px]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
