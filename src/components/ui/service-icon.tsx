interface ServiceIconProps {
	children: React.ReactNode;
}

export default function ServiceIcon({ children }: ServiceIconProps) {
	return (
		<div className="w-[50px] h-[50px] md:w-[72px] md:h-[72px] xl:w-[100px] xl:h-[100px]">
				{ children }
		</div>
	);
}
