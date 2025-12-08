'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldError, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupTextarea } from '@/components/ui/input-group';
import { useState } from 'react';

interface FormProps {
	translations: {
		formTitle: string;
		fields: {
			firstName: string;
			lastName: string;
			email: string;
			phone: string;
			description: string;
		};
		button: string;
		toast: string;
	};
	validationMessages: {
		name: {
			max: string;
			regex: string;
		};
		surname: {
			max: string;
			regex: string;
		};
		email: {
			invalid: string;
			min: string;
			max: string;
		};
		phone: {
			regex: string;
			min: string;
			max: string;
		};
		description: {
			max: string;
		};
	};
}

export default function Form({
								 translations,
								 validationMessages
							 }: FormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const formSchema = z.object({
		name: z
			.string()
			.max(50, { message: validationMessages.name.max })
			.regex(/^[a-zA-ZА-Яа-яёЁA-Za-zÇçƏəĞğİıÖöŞşÜü\s-]+$/, {
				message: validationMessages.name.regex
			}),
		surname: z
			.string()
			.max(50, { message: validationMessages.surname.max })
			.regex(/^[a-zA-ZА-Яа-яёЁA-Za-zÇçƏəĞğİıÖöŞşÜü\s-]+$/, {
				message: validationMessages.surname.regex
			}),
		email: z
			.string()
			.email({ message: validationMessages.email.invalid })
			.min(5, { message: validationMessages.email.min })
			.max(100, { message: validationMessages.email.max }),
		phone: z
			.string()
			.regex(/^[\+]?[0-9\s\-\(\)]+$/, {
				message: validationMessages.phone.regex
			})
			.min(7, { message: validationMessages.phone.min })
			.max(20, { message: validationMessages.phone.max }),
		description: z
			.string()
			.max(500, { message: validationMessages.description.max })
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
	});

	async function onSubmit(data: z.infer<typeof formSchema>) {
		setIsSubmitting(true);

		try {
			const response = await fetch('/api/consultation', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (response.ok) {
				// Успешная отправка
				toast.success(translations.toast, {
					position: 'top-center',
					duration: 5000,
					classNames: {
						toast: 'bg-green-50 border-green-200',
						title: 'text-green-800 font-medium',
					}
				});
				form.reset();
			} else {
				// Ошибка сервера
				toast.error(result.error || 'Ошибка при отправке заявки', {
					position: 'top-center',
					duration: 5000,
					classNames: {
						toast: 'bg-red-50 border-red-200',
						title: 'text-red-800 font-medium',
					}
				});
			}
		} catch (error) {
			// Ошибка сети
			toast.error('Ошибка сети. Пожалуйста, попробуйте еще раз.', {
				position: 'top-center',
				duration: 5000,
				classNames: {
					toast: 'bg-red-50 border-red-200',
					title: 'text-red-800 font-medium',
				}
			});
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<Card className="bg-white/19 border-white/23 mb-[10px] gap-[12px] w-[335px] md:w-[498px] md:mb-[37px] md:px-[12px]">
			<CardHeader>
				<CardTitle className="md:text-[24px] md:font-roboto md:font-extrabold">
					{translations.formTitle}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
					<FieldGroup>
						<div className="flex gap-[10px]">
							<Controller
								name="name"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<Input
											{...field}
											id="form-rhf-demo-name"
											aria-invalid={fieldState.invalid}
											placeholder={translations.fields.firstName}
											autoComplete="off"
											disabled={isSubmitting}
										/>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>

							<Controller
								name="surname"
								control={form.control}
								render={({ field, fieldState }) => (
									<Field data-invalid={fieldState.invalid}>
										<Input
											{...field}
											id="form-rhf-demo-surname"
											aria-invalid={fieldState.invalid}
											placeholder={translations.fields.lastName}
											autoComplete="off"
											disabled={isSubmitting}
										/>
										{fieldState.invalid && (
											<FieldError errors={[fieldState.error]} />
										)}
									</Field>
								)}
							/>
						</div>
						<Controller
							name="email"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<Input
										{...field}
										id="form-rhf-demo-email"
										aria-invalid={fieldState.invalid}
										placeholder={translations.fields.email}
										autoComplete="off"
										disabled={isSubmitting}
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
						<Controller
							name="phone"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<Input
										{...field}
										id="form-rhf-demo-phone"
										aria-invalid={fieldState.invalid}
										placeholder={translations.fields.phone}
										autoComplete="off"
										disabled={isSubmitting}
									/>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
						<Controller
							name="description"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<InputGroup>
										<InputGroupTextarea
											{...field}
											id="form-rhf-demo-description"
											placeholder={translations.fields.description}
											rows={2}
											className="min-h-24 resize-none"
											aria-invalid={fieldState.invalid}
											disabled={isSubmitting}
										/>
									</InputGroup>
									{fieldState.invalid && (
										<FieldError errors={[fieldState.error]} />
									)}
								</Field>
							)}
						/>
					</FieldGroup>
				</form>
			</CardContent>
			<CardFooter>
				<Button
					type="submit"
					form="form-rhf-demo"
					className="w-full mt-[10px] bg-white text-[#00823F] h-[50px] rounded-[6px] font-semibold hover:bg-[#CCF7E1] hover:text-[#00572A] md:mt-[30px] disabled:opacity-50 disabled:cursor-not-allowed"
					disabled={isSubmitting}
				>
					{isSubmitting ? (
						<div className="flex items-center justify-center gap-2">
							<div className="w-4 h-4 border-2 border-[#00823F] border-t-transparent rounded-full animate-spin"></div>
							Отправка...
						</div>
					) : (
						translations.button
					)}
				</Button>
			</CardFooter>
		</Card>
	);
}