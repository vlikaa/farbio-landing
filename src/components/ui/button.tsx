interface ButtonProps {
	title: string;
	className: string;
}

export default function Button({ title, className }: ButtonProps) {


	return (
		<a className={ `text-[12px] font-semibold font-inter ${ className }` }>
			{ title }
		</a>
	);
}