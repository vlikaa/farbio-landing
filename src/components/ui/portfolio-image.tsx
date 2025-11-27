import Image from 'next/image';

interface PortfolioImageProps {
	src: string;
	alt: string;
}

export function PortfolioImage({ src, alt }: PortfolioImageProps) {
	return (
		<div
			className="relative w-full aspect-[163/120] bg-gray-200 border border-[#33E187] rounded-xl backdrop-blur-[2.7px] overflow-hidden">
			<Image
				src={ src }
				alt={ alt }
				fill
				sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 20vw"
				className="object-cover"
				priority={ true }
			/>
		</div>
	);
}