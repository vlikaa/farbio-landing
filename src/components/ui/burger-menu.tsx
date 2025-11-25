import { useRef } from 'react'
import { NavItem } from '@/types/navigation';
import LanguageSwitcher from '@/components/ui/language-switcher';

interface BurgerMenuProps {
	isOpen: boolean
	onClose: () => void
	items: NavItem[];
}

function BurgerMenu({ isOpen, onClose, items }: BurgerMenuProps) {
	const menuRef = useRef<HTMLDivElement>(null)

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
		e.preventDefault();
		onClose()

		const sectionId = item.href.replace('#', '');
		const section = document.getElementById(sectionId);

		if (section) {
			const headerHeight = 50;
			const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;

			window.scrollTo({
				top: sectionTop,
				behavior: 'smooth'
			});
		}
	}


	return (
		<div
			ref={ menuRef }
			className={ `
				xl:hidden absolute top-full left-0 right-0 bg-white 
				transition-all duration-300 overflow-hidden
				${ isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0' }
			` }
		>
			<div className="flex justify-between items-start px-[20px] py-[30px]">
				<nav>
					<ul className="flex flex-col gap-[25px]">
						{ items.map((item) => (
							<li key={item.name}>
								<a
									href={ item.href }
									onClick={ (e) => handleNavClick(e, item) }
									className="text-[20px] font-extrabold font-roboto"
								>
									{ item.name }
								</a>
							</li>
						)) }
					</ul>
				</nav>

				<LanguageSwitcher/>
			</div>
		</div>
	)
}

export default BurgerMenu