interface BurgerButtonProps {
	isOpen: boolean
	onClick: () => void
}

function BurgerButton({ isOpen, onClick }: BurgerButtonProps) {
	return (
		<button
			className="xl:hidden flex flex-col space-y-1.5 p-2 z-50"
			onClick={onClick}
		>
			<span className={`w-[30px] h-0.5 bg-[#002B15] transition-all rounded-full ${isOpen ? 'h-[4px] rotate-45 translate-y-2.5' : ''}`}></span>
			<span className={`w-[30px] h-0.5 bg-[#002B15] transition-all rounded-full ${isOpen ? 'opacity-0' : ''}`}></span>
			<span className={`w-[30px] h-0.5 bg-[#002B15] transition-all rounded-full ${isOpen ? 'h-[4px] -rotate-45 -translate-y-2' : ''}`}></span>
		</button>
	)
}

export default BurgerButton