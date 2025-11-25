interface AvatarIconProps {
	icon: React.ReactNode;
}

export default function AvatarIcon({ icon }: AvatarIconProps) {
	return (
		<div className="flex flex-shrink-0 w-[25px] h-[25px] md:w-[45px] md:h-[45px]">
			{ icon }
		</div>
	);
}