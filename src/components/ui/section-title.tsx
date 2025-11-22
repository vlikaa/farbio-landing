interface TitleProps {
	title: string
}

export default function Title({ title }: TitleProps) {
	return (
		<div className="h-[20px] w-[176px] border-1 border-red-500">
			{ "title" }
		</div>
	)
}