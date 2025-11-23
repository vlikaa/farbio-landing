import Image from 'next/image';

interface LogoProps {
	width?: number;
	height?: number;
}

export default function Logo({width = 42, height = 40}: LogoProps) {
	return (
		<div>
			<Image
				src="/images/header/farbio.svg"
				alt="Farbio Logo"
				width={width}
				height={height}
				priority
			/>
		</div>
	);
}