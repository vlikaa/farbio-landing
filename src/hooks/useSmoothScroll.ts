import { useCallback } from 'react';

export const useSmoothScroll = () => {
	return useCallback((elementId: string) => {
		const element = document.getElementById(elementId.replace('#', ''));
		if (!element) return;

		const header = document.querySelector('header');
		const headerHeight = header ? header.offsetHeight : 0;

		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}, []);
};
