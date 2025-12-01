'use client'

import { useTranslations } from 'use-intl';
import SectionTitle from '@/components/ui/section-title';
import ServiceCard from '@/components/ui/service-card';
import DesignIcon from '@/components/icons/design-icon';
import { GrassIcon } from '@/components/icons/grass-icon';
import { ConstructionIcon } from '@/components/icons/construction-icon';
import { PlantIcon } from '@/components/icons/plant-icon';
import { WaterIcon } from '@/components/icons/water-icon';
import { ScissorsIcon } from '@/components/icons/scissors-icon';

export default function Services() {
	const t = useTranslations('Services');

	const services = [
		{ key: 'design', icon: <DesignIcon /> },
		{ key: 'lawn', icon: <GrassIcon /> },
		{ key: 'construction', icon: <ConstructionIcon /> },
		{ key: 'planting', icon: <PlantIcon /> },
		{ key: 'irrigation', icon: <WaterIcon /> },
		{ key: 'pruning', icon: <ScissorsIcon /> },
	];

	return (
		<section id="services" className="py-[50px] md:py-[100px] bg-gradient-to-t from-[#00D969]/30 via-white to-white 2xl:py-[200px]">
			<div className="max-w-7xl mx-auto flex flex-col items-center">
				<SectionTitle title={ t('tag') } />

				<h2 className="text-[26px] md:text-[48px] mt-[20px] mb-[10px] md:mt-[40px] md:mb-[20px] font-roboto font-bold md:font-extrabold text-center text-[#2D2D2D]">
					{ t('title') }
				</h2>

				<p className="mb-[40px] md:mb-[60px] text-[12px] md:text-[16px] font-inter font-light text-center text-[#2D2D2D] whitespace-pre-line 2xl:mb-[100px]">
					{ t('subtitle') }
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px] md:gap-x-[20px] md:gap-y-[30px] 2xl:gap-x-[100px]">
					{ services.map((service) => (
						<ServiceCard
							key={ service.key }
							icon={ service.icon }
							title={ t(`items.${ service.key }.title`) }
							description={ t(`items.${ service.key }.description`) }
						/>
					)) }
				</div>
			</div>
		</section>
	);
}
