'use client'

import { useTranslations } from 'use-intl';
import { PhoneIcon } from '@/components/icons/phone-icon';
import { FacebookIcon } from '@/components/icons/facebook-icon';
import { EmailIcon } from '@/components/icons/email-icon';
import ContactItem from '@/components/ui/contact-item';
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Field, FieldError, FieldGroup } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupTextarea } from '@/components/ui/input-group'

export default function ConsultationForm() {
	const t = useTranslations('ConsultationForm');

	const formSchema = z.object({
		name: z
			.string()
			.min(2, { message: t('validation.name.min') })
			.max(50, { message: t('validation.name.max') })
			.regex(/^[a-zA-ZА-Яа-яёЁA-Za-zÇçƏəĞğİıÖöŞşÜü\s-]+$/, {
				message: t('validation.name.regex')
			}),
		surname: z
			.string()
			.min(2, { message: t('validation.surname.min') })
			.max(50, { message: t('validation.surname.max') })
			.regex(/^[a-zA-ZА-Яа-яёЁA-Za-zÇçƏəĞğİıÖöŞşÜü\s-]+$/, {
				message: t('validation.surname.regex')
			}),
		email: z
			.string()
			.email({ message: t('validation.email.invalid') })
			.min(5, { message: t('validation.email.min') })
			.max(100, { message: t('validation.email.max') }),
		phone: z
			.string()
			.regex(/^[\+]?[0-9\s\-\(\)]+$/, {
				message: t('validation.phone.regex')
			})
			.min(7, { message: t('validation.phone.min') })
			.max(20, { message: t('validation.phone.max') }),
		description: z
			.string()
			.min(10, { message: t('validation.description.min') })
			.max(500, { message: t('validation.description.max') })
			.optional(),
	});


	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			surname: '',
			email: '',
			phone: '',
			description: '',
		},
	})

	function onSubmit(data: z.infer<typeof formSchema>) {
		toast(t('toast'), {
			position: 'bottom-right',
			classNames: {
				content: 'flex flex-col gap-2',
			},
			style: {
				'--border-radius': 'calc(var(--radius)  + 4px)',
			} as React.CSSProperties,
		})

		form.reset();
	}

	return (
		<section id="consultation"
				 className="flex flex-col items-center py-[50px] md:py-[100px] px-[20px] bg-gradient-to-br from-[#006D35] to-[#00D366] 2xl:py-[200px]">
			<h2 className="text-[26px] md:text-[48px] font-inter font-bold md:font-extrabold text-center text-white w-[300px] md:w-[600] xl:w-full">
				{ t('title') }
			</h2>

			<p className="mt-[10px] mb-[40px] md:mt-[40px] md:mb-[33px] xl:mt-[20px] xl:mb-[60px] text-[12px] md:text-[16px] font-inter font-light text-center whitespace-pre-line text-white 2xl:mb-[100px]">
				{ t('subtitle') }
			</p>

			<div className="flex flex-col  items-center 2xl:flex-row 2xl:gap-[400px]">
				<Card className="bg-white/19 border-white/23 mb-[10px] gap-[12px] w-[335px] md:w-[498px] md:mb-[37px] md:px-[12px]">
					<CardHeader>
						<CardTitle className="md:text-[24px] md:font-roboto md:font-extrabold">{ t('formTitle') }</CardTitle>
					</CardHeader>
					<CardContent>
						<form id="form-rhf-demo" onSubmit={ form.handleSubmit(onSubmit) }>
							<FieldGroup>
								<div className="flex gap-[10px]">
									<Controller
										name="name"
										control={ form.control }
										render={ ({ field, fieldState }) => (
											<Field data-invalid={ fieldState.invalid }>
												<Input
													{ ...field }
													id="form-rhf-demo-title"
													aria-invalid={ fieldState.invalid }
													placeholder={ t('fields.firstName') }
													autoComplete="off"
												/>
												{ fieldState.invalid && (
													<FieldError errors={ [fieldState.error] }/>
												) }
											</Field>
										) }
									/>

									<Controller
										name="surname"
										control={ form.control }
										render={ ({ field, fieldState }) => (
											<Field data-invalid={ fieldState.invalid }>
												<Input
													{ ...field }
													id="form-rhf-demo-title"
													aria-invalid={ fieldState.invalid }
													placeholder={ t('fields.lastName') }
													autoComplete="off"
												/>
												{ fieldState.invalid && (
													<FieldError errors={ [fieldState.error] }/>
												) }
											</Field>
										) }
									/>
								</div>
								<Controller
									name="email"
									control={ form.control }
									render={ ({ field, fieldState }) => (
										<Field data-invalid={ fieldState.invalid }>
											<Input
												{ ...field }
												id="form-rhf-demo-title"
												aria-invalid={ fieldState.invalid }
												placeholder={ t('fields.email') }
												autoComplete="off"
											/>
											{ fieldState.invalid && (
												<FieldError errors={ [fieldState.error] }/>
											) }
										</Field>
									) }
								/>
								<Controller
									name="phone"
									control={ form.control }
									render={ ({ field, fieldState }) => (
										<Field data-invalid={ fieldState.invalid }>
											<Input
												{ ...field }
												id="form-rhf-demo-title"
												aria-invalid={ fieldState.invalid }
												placeholder={ t('fields.phone') }
												autoComplete="off"
											/>
											{ fieldState.invalid && (
												<FieldError errors={ [fieldState.error] }/>
											) }
										</Field>
									) }
								/>
								<Controller
									name="description"
									control={ form.control }
									render={ ({ field, fieldState }) => (
										<Field data-invalid={ fieldState.invalid }>
											<InputGroup>
												<InputGroupTextarea
													{ ...field }
													id="form-rhf-demo-description"
													placeholder={ t('fields.description') }
													rows={ 2 }
													className="min-h-24 resize-none"
													aria-invalid={ fieldState.invalid }
												/>
											</InputGroup>
											{ fieldState.invalid && (
												<FieldError errors={ [fieldState.error] }/>
											) }
										</Field>
									) }
								/>
							</FieldGroup>
						</form>
					</CardContent>
					<CardFooter>
						<Button type="submit" form="form-rhf-demo"
								className="w-full mt-[10px] bg-white text-[#00823F] h-[50px] rounded-[6px] font-semibold hover:bg-[#CCF7E1] hover:text-[#00572A] md:mt-[30px]">
							{ t('button') }
						</Button>
					</CardFooter>
				</Card>

				<div
					className="grid grid-cols-2 md:grid-cols-3 gap-x-[60px] gap-y-[20px] md:gap-x-[10px] xl:gap-x-[33px] 2xl:grid-cols-1 2xl:h-[336px]">
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
