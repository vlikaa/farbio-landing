interface PortfolioImageProps {
	index: number;
}

export function PortfolioImage({ index }: PortfolioImageProps) {
	return (
		<div
			className="w-full aspect-[163/120] bg-gray-200 border border-[#33E187] rounded-xl backdrop-blur-[2.7px] overflow-hidden flex items-center justify-center">
			<span className="text-gray-400 text-xs">Image { index + 1 }</span>
		</div>
	);
}