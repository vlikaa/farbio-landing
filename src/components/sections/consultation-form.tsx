import { getTranslations } from 'next-intl/server';
import { PhoneIcon } from '@/components/icons/phone-icon';
import { FacebookIcon } from '@/components/icons/facebook-icon';
import { EmailIcon } from '@/components/icons/email-icon';
import ContactItem from '@/components/ui/contact-item';
import Form from '@/components/ui/form';

export default async function ConsultationForm() {
	const t = await getTranslations('ConsultationForm');

	const validationMessages = {
		name: {
			max: t('validation.name.max'),
			regex: t('validation.name.regex')
		},
		surname: {
			max: t('validation.surname.max'),
			regex: t('validation.surname.regex')
		},
		email: {
			invalid: t('validation.email.invalid'),
			min: t('validation.email.min'),
			max: t('validation.email.max')
		},
		phone: {
			regex: t('validation.phone.regex'),
			min: t('validation.phone.min'),
			max: t('validation.phone.max')
		},
		description: {
			max: t('validation.description.max')
		}
	};

	const contactItems = [
		{
			icon: <PhoneIcon />,
			label: t('contact.phone'),
			value: t('phoneNumber')
		},
		{
			icon: <EmailIcon />,
			label: t('contact.email'),
			value: t('emailAddress')
		},
		{
			icon: <FacebookIcon />,
			label: t('contact.facebook'),
			value: t('facebookPage'),
			className: 'col-span-2 md:col-span-1'
		}
	];

	return (
		<section id="consultation"
				 className="flex flex-col items-center py-[50px] md:py-[100px] px-[20px] bg-gradient-to-br from-[#006D35] to-[#00D366] 2xl:py-[200px]">
			<h2 className="text-[26px] md:text-[48px] font-inter font-bold md:font-extrabold text-center text-white w-[300px] md:w-[600] xl:w-full">
				{t('title')}
			</h2>

			<p className="mt-[10px] mb-[40px] md:mt-[40px] md:mb-[33px] xl:mt-[20px] xl:mb-[60px] text-[12px] md:text-[16px] font-inter font-light text-center whitespace-pre-line text-white 2xl:mb-[100px]">
				{t('subtitle')}
			</p>

			<div className="flex flex-col items-center 2xl:flex-row 2xl:gap-[400px]">
				<Form
					translations={{
						formTitle: t('formTitle'),
						fields: {
							firstName: t('fields.firstName'),
							lastName: t('fields.lastName'),
							email: t('fields.email'),
							phone: t('fields.phone'),
							description: t('fields.description')
						},
						button: t('button'),
						toast: t('toast')
					}}
					validationMessages={validationMessages}
				/>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-x-[60px] gap-y-[20px] md:gap-x-[10px] xl:gap-x-[33px] 2xl:grid-cols-1 2xl:h-[336px]">
					{contactItems.map((item, index) => (
						<ContactItem
							key={index}
							icon={item.icon}
							label={item.label}
							value={item.value}
							className={item.className}
						/>
					))}
				</div>
			</div>
		</section>
	);
}