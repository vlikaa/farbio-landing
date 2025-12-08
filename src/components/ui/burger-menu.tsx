'use client';

import { useState } from 'react';
import BurgerButton from '@/components/ui/burger-button';
import BurgerLayout from '@/components/ui/burger-layout';

export default function BurgerMenu({ items }: { items: Array<{ name: string, href: string }> }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
	const handleMenuClose = () => setIsMenuOpen(false);

	return (
		<>
			<BurgerButton isOpen={isMenuOpen} onClick={handleMenuToggle} />
			<BurgerLayout isOpen={isMenuOpen} onClose={handleMenuClose} items={items} />
		</>
	);
}