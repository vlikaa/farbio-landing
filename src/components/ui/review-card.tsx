import StarIcon from '@/components/icons/star-icon';
import AvatarIcon from '@/components/ui/avatar-icon';

interface ReviewCardProps {
	stars: number;
	text: string;
	avatarPath?: string;
}

export function ReviewCard({ text, stars, avatarPath }: ReviewCardProps) {
	return (
		<div
			className="flex flex-col w-[163px] p-[10px] bg-white border border-[#33E187] rounded-xl md:p-[20px] md:w-[315px] xl:w-[373px] xl:p-[24px]">
			<div className="flex items-center gap-[9px] md:gap-[13px] xl:gap-[18px]">
				<AvatarIcon path={ avatarPath }/>

				<div className="flex gap-[6px] md:gap-[10px] xl:gap-[15px]">
					{ Array.from({ length: stars }).map((_, i) => (
						<StarIcon key={ i }/>
					)) }
				</div>
			</div>

			<div className="h-full flex flex-col justify-between">
				<p className="text-[8px] mt-[4px] font-inter font-extralight leading-[10px] md:text-[16px] md:leading-[20px] md:mt-[8px] xl:mt-[19px]">
					{ text }
				</p>

				<p className="text-[8px] mt-[1px] font-inter font-extralight text-[#00823F] md:text-[16px] md:mt-[5px] xl:mt-[10px]">
					facebook
				</p>
			</div>
		</div>
	);
}