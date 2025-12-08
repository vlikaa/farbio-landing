import type { Metadata } from 'next';
import '../globals.css';
import { notFound } from 'next/navigation';
import { hasLocale } from 'use-intl';
import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { Inter, Roboto } from 'next/font/google'
import { Toaster } from 'sonner';
import StructuredData from '@/components/seo/structured-data';

const inter = Inter({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-inter'
})

const roboto = Roboto({
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-roboto'
})

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	
	if (!hasLocale(routing.locales, locale)) {
		return {
			title: 'Farbio',
			description: 'Professional gardening services',
		};
	}

	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://farbio.co';
	const currentUrl = `${baseUrl}/${locale}`;
	
	const title = locale === 'az' 
		? 'Farbio - Peşəkar Bağ Xidmətləri | Bağçılıq və Landşaft Dizaynı'
		: 'Farbio - Профессиональные Садовые Услуги | Садоводство и Ландшафтный Дизайн';
	
	const description = locale === 'az'
		? '15+ il təcrübə ilə peşəkar bağ xidmətləri. Bağ dizaynı, qazon salınması, bitkilərin əkilməsi, suvarma sistemi və daha çox. Pulsuz konsultasiya.'
		: 'Профессиональные садовые услуги с опытом более 15 лет. Дизайн сада, посадка газона, посадка растений, система орошения и многое другое. Бесплатная консультация.';

	return {
		metadataBase: new URL(baseUrl),
		title: {
			default: title,
			template: '%s | Farbio'
		},
		description,
		keywords: locale === 'az'
			? ['bağçılıq', 'landşaft dizaynı', 'qazon salınması', 'bitki əkilməsi', 'suvarma sistemi', 'bağ xidmətləri', 'Azərbaycan']
			: ['садоводство', 'ландшафтный дизайн', 'посадка газона', 'посадка растений', 'система орошения', 'садовые услуги', 'Азербайджан'],
		authors: [{ name: 'Farbio' }],
		creator: 'Farbio',
		publisher: 'Farbio',
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		openGraph: {
			type: 'website',
			locale: locale === 'az' ? 'az_AZ' : 'ru_RU',
			url: currentUrl,
			title,
			description,
			siteName: 'Farbio',
			images: [
				{
					url: `${baseUrl}/images/gardener.webp`,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [`${baseUrl}/images/gardener.webp`],
		},
		alternates: {
			canonical: currentUrl,
			languages: {
				'az': `${baseUrl}/az`,
				'ru': `${baseUrl}/ru`,
				'x-default': `${baseUrl}/az`,
			},
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		verification: {
			// Add your verification codes here when available
			// google: 'your-google-verification-code',
			// yandex: 'your-yandex-verification-code',
		},
	};
}

export default async function RootLayout({ 
	children, 
	params 
}: { 
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={ locale }>
		<body className={`${inter.className} ${roboto.className}`}>
		<StructuredData locale={ locale } />
		<NextIntlClientProvider>
			{ children }
			<Toaster />
		</NextIntlClientProvider>
		</body>
		</html>
	);
}
