import { useSmoothScroll } from '@/hooks/useSmoothScroll';

interface ButtonProps {
	title: string;
	className: string;
	href: string;
}

export default function CustomButton({ title, className, href }: ButtonProps) {
	const scrollTo = useSmoothScroll();

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		scrollTo(href);
	}

	return (
		<a className={ `text-[12px] font-semibold font-inter ${ className }` } onClick={ handleClick }>
			{ title }
		</a>
	);
}