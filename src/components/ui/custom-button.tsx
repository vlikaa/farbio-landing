interface ButtonProps {
	title: string;
	className: string;
	href: string;
}

export default function CustomButton({ title, className, href }: ButtonProps) {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		const sectionId = href.replace('#', '');
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
		<a className={ `text-[12px] font-semibold font-inter ${ className }` } onClick={ handleClick }>
			{ title }
		</a>
	);
}