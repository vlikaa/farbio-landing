import NavigationItem from '@/components/ui/navigation-item';
import { NavigationBarProps } from '@/types/navigation';

export default function NavigationBar({ items }: NavigationBarProps) {
	return (
		<nav>
			<ul className="hidden md:flex md:gap-[20px] xl:gap-[50px]">
				{ items.map((item) => (
					<NavigationItem item={ item } key={ item.name }/>
				)) }
			</ul>
		</nav>
	);
}