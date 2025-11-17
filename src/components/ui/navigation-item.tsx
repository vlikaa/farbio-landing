import { NavigationItemProps } from '@/types/navigation';


function NavigationItem({ item }: NavigationItemProps) {
	return (
		<li>
			<a
				href={ item.href }
				className="text-[16px] font-inter font-light text-[#002B15] hover:text-[#00AE54]"
			>
				{ item.name }
			</a>
		</li>
	)
}

export default NavigationItem