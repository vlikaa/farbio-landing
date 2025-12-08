interface StructuredDataProps {
	locale: string;
}

export default async function StructuredData({ locale }: StructuredDataProps) {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://farbio.az';
	
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': `${baseUrl}/#organization`,
		name: 'Farbio',
		description: locale === 'az'
			? 'Peşəkar bağ xidmətləri - bağ dizaynı, qazon salınması, bitkilərin əkilməsi və daha çox. 15+ il təcrübə.'
			: 'Профессиональные садовые услуги - дизайн сада, посадка газона, посадка растений и многое другое. Более 15 лет опыта.',
		url: baseUrl,
		telephone: '+994506748535',
		email: 'farbioaz@gmail.com',
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'AZ',
			addressLocality: 'Azerbaijan',
		},
		geo: {
			'@type': 'GeoCoordinates',
			addressCountry: 'AZ',
		},
		openingHoursSpecification: {
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: [
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday',
			],
			opens: '09:00',
			closes: '18:00',
		},
		priceRange: '$$',
		image: `${baseUrl}/images/gardener.webp`,
		sameAs: [
			'https://facebook.com',
			'https://instagram.com',
			'https://t.me/farbioaz',
		],
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: '5',
			reviewCount: '3',
		},
		areaServed: {
			'@type': 'Country',
			name: 'Azerbaijan',
		},
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: locale === 'az' ? 'Bağ Xidmətləri' : 'Садовые Услуги',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: locale === 'az' ? 'Bağ dizaynı' : 'Дизайн сада',
						description: locale === 'az'
							? 'Sahənizə uyğun dəbli və rahat landşaft yaradırıq'
							: 'Создаём стильный и уютный ландшафт под ваш участок',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: locale === 'az' ? 'Qazon salınması' : 'Посадка газона',
						description: locale === 'az'
							? 'Torpağın hazırlanmasından ideal ot örtüyünə qədər'
							: 'От подготовки почвы до идеального травяного покрытия',
					},
				},
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: locale === 'az' ? 'Bitkilərin əkilməsi' : 'Посадка растений',
						description: locale === 'az'
							? 'İlboyu gözəllik üçün bitkilər seçir və əkirik'
							: 'Подбираем и высаживаем растения для круглогодичной красоты',
					},
				},
			],
		},
	};

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
		/>
	);
}

