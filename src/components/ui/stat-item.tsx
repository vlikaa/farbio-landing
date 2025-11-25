interface StatItemProps {
	label: string;
	value: string;
	className?: string;
}

export function StatItem({ label, value, className }: StatItemProps) {
	return (
		<div className={ `flex flex-col ${ className }` }>
			<span
				className="text-[20px] font-inter font-bold text-[#00823F] md:text-[30px] md:font-extrabold md:font-roboto xl:text-[32px]">
				{ label }
			</span>
			<span className="text-[12px] font-inter font-extralight text-[#2D2D2D] leading-[8px] md:text-[16px] md:leading-none">
				{ value }
			</span>
		</div>
	);
}