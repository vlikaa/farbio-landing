interface ContactItemProps {
	icon: React.ReactNode;
	label: string;
	value: string;
	className?: string;
}

export default function ContactItem({ icon, label, value, className }: ContactItemProps) {
	return (
		<div className={ `flex justify-center items-center gap-[12px] md:gap-[20px] ${ className }` }>
			<div className="flex-shrink-0 w-[30px] h-[30px] md:w-[50px] md:h-[50px]">
				{ icon }
			</div>
			<div className="flex flex-col justify-center">
				<span className="text-[16px] md:text-[20px] font-inter font-light md:font-bold text-white">
					{ label }
				</span>
				<span className="text-[8px] md:text-[16px] font-inter font-extralight leading-[10px] text-white">
					{ value }
				</span>
			</div>
		</div>
	);
}