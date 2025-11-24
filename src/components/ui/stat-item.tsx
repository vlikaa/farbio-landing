interface StatItemProps {
	label: string;
	value: string;
	className?: string;
}

export function StatItem({ label, value, className }: StatItemProps) {
	return (
		<div className={ `flex flex-col ${ className }` }>
			<span
				className="text-[16px] md:text-[24px] font-inter font-bold md:font-extrabold md:font-roboto text-[#00823F]">
				{ label }
			</span>
			<span className="text-[12px] md:text-[16px] font-inter font-extralight text-[#2D2D2D]">
				{ value }
			</span>
		</div>
	);
}