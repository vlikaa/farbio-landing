'use client'

import { FormEvent, useState } from 'react';
import { useTranslations } from 'use-intl';
import { Input } from '@/components/ui/input';
import { PhoneIcon } from '@/components/icons/phone-icon';
import { FacebookIcon } from '@/components/icons/facebook-icon';
import { EmailIcon } from '@/components/icons/email-icon';
import ContactItem from '@/components/ui/contact-item';


export default function ConsultationForm() {
	const t = useTranslations('ConsultationForm');
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		description: ''
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			const response = await fetch('/api/send-email', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setSubmitStatus('success');
				setFormData({
					firstName: '',
					lastName: '',
					email: '',
					phone: '',
					description: ''
				});
			} else {
				setSubmitStatus('error');
			}
		} catch (error) {
			console.error('Error submitting form:', error);
			setSubmitStatus('error');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section id="consultation"
				 className="flex flex-col items-center py-[50px] md:py-[100px] px-[20px] bg-gradient-to-br from-[#006D35] to-[#00D366] 2xl:py-[200px]">
			<h2 className="text-[26px] md:text-[48px] font-inter font-bold md:font-extrabold text-center text-white">
				{ t('title') }
			</h2>

			<p className="mt-[10px] mb-[40px] md:mt-[40px] md:mb-[33px] xl:mt-[20px] xl:mb-[60px] text-[12px] md:text-[16px] font-inter font-light text-center whitespace-pre-line text-white 2xl:mb-[100px]">
				{ t('subtitle') }
			</p>

			<div className="2xl:flex gap-[400px] items-center">
				<div
					className="mb-[25px] md:mb-[37px] xl:mb-[60px] px-[20px] py-[30px] md:px-[33px] md:py-[40px] bg-white/20 border border-white/20 rounded-xl">
					<h3 className="mb-[20px] md:mb-[12px] text-[16px] md:text-[24px] font-roboto font-medium md:font-extrabold text-white">
						{ t('formTitle') }
					</h3>

					<form onSubmit={ handleSubmit } className="flex flex-col gap-[10px]">
						<div className="flex gap-[10px]">
							<Input
								type="text"
								name="firstName"
								value={ formData.firstName }
								onChange={ handleChange }
								required
								placeholder={ t('fields.firstName') }
							/>
							<Input
								type="text"
								name="lastName"
								value={ formData.lastName }
								onChange={ handleChange }
								placeholder={ t('fields.lastName') }
							/>
						</div>

						<div>
							<Input
								type="email"
								name="email"
								value={ formData.email }
								onChange={ handleChange }
								required
								placeholder={ t('fields.email') }
							/>
						</div>

						<div>
							<Input
								type="tel"
								name="phone"
								value={ formData.phone }
								onChange={ handleChange }
								required
								placeholder={ t('fields.phone') }
							/>
						</div>

						<div>
							<textarea
								name="description"
								value={ formData.description }
								onChange={ handleChange }
								rows={ 4 }
								placeholder={ t('fields.description') }
								className="w-full px-[15px] py-[15px] mb-[20px] md:mb-[40px] bg-white/30 border border-white/23 rounded-lg text-white placeholder-white/90 text-[12px] font-inter font-light resize-none focus:outline-none focus:ring-2 focus:ring-white/50"
							/>
						</div>

						<button
							type="submit"
							disabled={ isSubmitting }
							className="w-[290px] md:w-[430px] py-3 bg-white rounded-md text-[#00823F] text-[12px] md:text-[14px] font-inter font-semibold leading-[15px] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{ isSubmitting ? 'Отправка...' : t('button') }
						</button>

						{ submitStatus === 'success' && (
							<p className="text-center text-white text-sm">
								{ t('success') }
							</p>
						) }
						{ submitStatus === 'error' && (
							<p className="text-center text-red-200 text-sm">
								{ t('error') }
							</p>
						) }
					</form>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-x-[60px] gap-y-[20px] 2xl:grid-cols-1 2xl:h-[336px]">
					<ContactItem
						icon={ <PhoneIcon/> }
						label={ t('contact.phone') }
						value={ t('phoneNumber') }
					/>
					<ContactItem
						icon={ <EmailIcon/> }
						label={ t('contact.email') }
						value={ t('emailAddress') }
					/>
					<ContactItem
						className="col-span-2 md:col-span-1"
						icon={ <FacebookIcon/> }
						label={ t('contact.facebook') }
						value={ t('facebookPage') }
					/>
				</div>
			</div>
		</section>
	);
}
