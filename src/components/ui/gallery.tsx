'use client';

import { useState } from 'react';
import { PortfolioImage } from '@/components/ui/portfolio-image';

interface GalleryProps {
	images: string[];
	initialImagesCount: number;
	translations: {
		tag: string;
		viewMore: string;
		viewLess: string;
	};
}

export default function Gallery({
											images,
											initialImagesCount,
											translations
										}: GalleryProps) {
	const [showAll, setShowAll] = useState(false);

	const displayedImages = showAll ? images : images.slice(0, initialImagesCount);

	const handleToggle = () => {
		setShowAll(!showAll);
	};

	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-x-[10px] gap-y-[20px] mb-[40px] md:gap-x-[20px] md:gap-y-[30px] xl:mb-[60px] 2xl:grid-cols-6 2xl:mb-[100px]">
				{displayedImages.map((src, index) => {
					const imageNumber = index + 1;
					const altText = `${translations.tag} - (${imageNumber})`;

					return (
						<PortfolioImage
							key={`${src}-${index}`}
							src={src}
							alt={altText}
						/>
					);
				})}
			</div>

			<button
				onClick={handleToggle}
				className="text-[18px] md:text-[20px] font-roboto font-extrabold text-[#00572A] underline hover:opacity-80 transition-opacity 2xl:text-[24px]"
				aria-expanded={showAll}
				aria-label={showAll ? translations.viewLess : translations.viewMore}
			>
				{showAll ? translations.viewLess : translations.viewMore}
			</button>
		</>
	);
}