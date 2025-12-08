'use client'

import { useEffect, useState } from 'react';
import { NavigationItemProps } from '@/types/navigation';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

function NavigationItem({ item }: NavigationItemProps) {
	const [isActive, setIsActive] = useState(false);

	const scrollTo = useSmoothScroll();

	useEffect(() => {
		const sectionId = item.href.replace('#', '');
		if (!sectionId) return;

		const section = document.getElementById(sectionId);
		if (!section) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsActive(true);
					} else {

						setIsActive(false);
					}
				});
			},
			{
				rootMargin: '-50% 0px -50% 0px',
				threshold: 0
			}
		);

		observer.observe(section);

		return () => {
			observer.disconnect();
		};
	}, [item.href]);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		scrollTo(item.href);
	};

	return (
		<li>
			<a
				href={ item.href }
				onClick={ handleClick }
				className={ `
					text-[16px] font-inter font-light transition-colors'
					${ isActive
					? 'text-[#00AE54]'
					: 'text-[#002B15] hover:text-[#00AE54]'
				}
				` }
			>
				{ item.name }
			</a>
		</li>
	)
}

export default NavigationItem