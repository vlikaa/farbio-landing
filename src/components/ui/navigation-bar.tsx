import NavigationItem from '@/components/ui/navigation-item';
import { NavigationBarProps } from '@/types/navigation';

export default function NavigationBar({ items }: NavigationBarProps) {
	return (
		<nav>
			<ul className="hidden xl:flex xl:gap-[45px]">
				{ items.map((item) => (
					<NavigationItem item={ item } key={ item.name }/>
				)) }
			</ul>
		</nav>
	);
}