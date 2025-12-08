import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://farbio.az';
	
	const routes = routing.locales.map((locale) => ({
		url: `${baseUrl}/${locale}`,
		lastModified: new Date(),
		changeFrequency: 'monthly' as const,
		priority: 1,
		alternates: {
			languages: Object.fromEntries(
				routing.locales.map((loc) => [loc, `${baseUrl}/${loc}`])
			),
		},
	}));

	return routes;
}

