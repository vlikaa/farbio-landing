import { useRef } from 'react'
import { NavItem } from '@/types/navigation';
import LanguageSwitcher from '@/components/ui/language-switcher';
import { PhoneIcon } from '@/components/icons/phone-icon';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface BurgerMenuProps {
	isOpen: boolean
	onClose: () => void
	items: NavItem[];
}

function BurgerMenu({ isOpen, onClose, items }: BurgerMenuProps) {
	const menuRef = useRef<HTMLDivElement>(null)
	const scrollTo = useSmoothScroll();

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
		e.preventDefault();
		onClose();
		scrollTo(item.href);
	}

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		onClose();
		scrollTo("#consultation");
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
			<div className="flex justify-between items-start px-[20px] py-[30px] md:px-[60px]">
				<nav>
					<ul className="flex flex-col gap-[25px]">
						{ items.map((item) => (
							<li key={ item.name }>
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

				<div className="flex flex-col gap-[135px] items-center">
					<LanguageSwitcher/>

					<div className="w-[40px] h-[40px]">
						<a onClick={handleClick}>
							<PhoneIcon/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BurgerMenu