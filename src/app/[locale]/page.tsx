import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import Reviews from '@/components/sections/reviews';
import Portfolio from '@/components/sections/portfolio';
import ConsultationForm from '@/components/sections/consultation-form';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Services />
				<About />
				<Reviews />
				<Portfolio />
				<ConsultationForm />
			</main>
			<Footer />
		</>
	);
}
