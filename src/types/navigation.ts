export interface NavItem {
	name: string;
	href: string;
}

export interface NavigationBarProps {
	items: NavItem[];
}

export interface NavigationItemProps {
	item: NavItem;
}