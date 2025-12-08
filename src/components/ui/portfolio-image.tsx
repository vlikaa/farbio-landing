import Image from 'next/image';

interface PortfolioImageProps {
	src: string;
	alt: string;
}

export function PortfolioImage({ src, alt }: PortfolioImageProps) {
	return (
		<div
			className="relative w-[163px] h-[120px] bg-gray-200 border border-[#33E187] rounded-xl backdrop-blur-[2.7px] overflow-hidden md:w-[147px] md:h-[167px] xl:w-[275] xl:h-[215px] 2xl:w-[280px]">
			<Image
				src={ src }
				alt={ alt }
				fill
				className="object-cover"
				sizes="(max-width: 768px) 163px, (max-width: 1280px) 147px, 280px"
			/>
		</div>
	);
}