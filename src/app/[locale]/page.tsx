import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import About from '@/components/sections/about';
import Reviews from '@/components/sections/reviews';
import Portfolio from '@/components/sections/portfolio';
import ConsultationForm from '@/components/sections/consultation-form';
import { Locale } from 'use-intl';
import { use } from 'react';
import { setRequestLocale } from 'next-intl/server';

export default function Home({ params }: PageProps<'/[locale]'>) {
	const { locale } = use(params);

	setRequestLocale(locale as Locale);

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
