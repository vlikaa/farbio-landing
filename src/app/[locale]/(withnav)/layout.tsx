import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

interface WithNavLayoutProps {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}

export default async function WithNavLayout({ children, params }: WithNavLayoutProps) {
	await params;

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
