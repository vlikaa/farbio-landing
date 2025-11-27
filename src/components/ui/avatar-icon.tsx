import Image from 'next/image';

interface AvatarIconProps {
	path: string | undefined;
}

export default function AvatarIcon({ path }: AvatarIconProps) {
	return (
		<div>
			<Image
				src={ path != undefined ? path : '/images/reviews/user1-avatar.png' }
				alt="image"
				width={ 25 }
				height={ 25 }
				priority
				className=" md:w-[45px] md:h-[45px]"
			/>
		</div>
	);
}