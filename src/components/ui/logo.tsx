import Image from 'next/image';

export default function Logo() {
	return (
		<div>
			<Image
				src="/images/header/farbio.svg"
				alt="Farbio Logo"
				width={42}
				height={40}
				priority
			/>
		</div>
	);
}