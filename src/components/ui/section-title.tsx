interface TitleProps {
	title: string
}

export default function SectionTitle({ title }: TitleProps) {
	return (
		<div className="flex justify-center items-center w-[100px] md:w-[176px] border-1 border-[#33E187] bg-[#CCF7E1] rounded-[8px] text-[12px]">
			<p className="font-inter font-light text-[#00823F]">{ title }</p>
		</div>
	)
}