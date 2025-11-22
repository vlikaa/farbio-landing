import ServiceIcon from '@/components/ui/service-icon';

interface ServiceCardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
	return (
		<div className="flex items-center justify-center px-[20px] gap-[16px] md:gap-[10px] xl:gap-[12px] w-[335px] h-[98px] md:w-[314px] md:h-[167px] xl:w-[373px] border-1 border-[#66E8A5] bg-white rounded-xl">
			<ServiceIcon>{ icon }</ServiceIcon>

			<div className="flex-1 flex-col justify-center items-center">
				<h3 className="text-[16px] md:text-[18px] font-inter font-semibold md:font-bold text-center mb-[12px] xl:mb-[18px]">
					{ title }
				</h3>
				<p className="text-[12px] md:text-[15px] font-inter font-extralight text-center">
					{ description }
				</p>
			</div>
		</div>
	);
}