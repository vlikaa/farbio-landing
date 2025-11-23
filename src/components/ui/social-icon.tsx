interface SocialIconProps {
	icon: React.ReactNode;
	href: string;
}

export default function SocialIcon({ icon, href }: SocialIconProps) {
	return (
		<a
			href={ href }
			target="_blank"
			rel="noopener noreferrer"
			className="w-[34px] h-[34px] rounded-full bg-[#CCF7E1] flex items-center justify-center hover:opacity-80 transition-opacity"
		>
			{ icon }
		</a>
	);
}