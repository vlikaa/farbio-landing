'use client'

import { useTranslations } from 'use-intl';
import Logo from '@/components/ui/logo';
import { FacebookIcon } from '@/components/icons/facebook-icon';
import { WhatsappIcon } from '@/components/icons/whatsapp-icon';
import { TelegramIcon } from '@/components/icons/telegram-icon';
import { InstagramIcon } from '@/components/icons/instagram-icon';
import SocialIcon from '@/components/ui/social-icon';

export default function Footer() {
	const t = useTranslations('Footer');
	const consultationForm = useTranslations('ConsultationForm');

	return (
		<footer className="xl:flex xl:flex-col py-[50px] md:py-[100px] px-[20px] md:px-[60px] bg-[#160D32] 2xl:px-[100px]">
			<div className="grid gap-x-[50px] md:gap-x-0">
				<div className="flex flex-col justify-center items-center col-span-2 md:col-span-1 md:justify-start md:items-start">
					<Logo width={ 52 } height={ 50 }/>

					<p className="hidden md:block w-[300px] xl:w-[372px] mt-[20px] mb-[27px] xl:mb-[45px] text-[12px] font-inter font-extralight text-white">
						{ t('description') }
					</p>

					<p className="hidden md:block text-[12px] font-inter font-extralight text-white">
						{ t('copyright') }
					</p>
				</div>

				<p className="md:hidden col-span-2 md:col-span-1 md:row-start-2 mt-[20px] mb-[40px] text-[8px] md:text-[12px] font-inter font-extralight text-center md:text-left text-white">
					{ t('description') }
				</p>
				
				<div className="md:col-start-2 md:row-start-1 md:mb-[34px] xl:mb-0 xl:ml-[21px] xl:mr-[280px] 2xl:ml-[650px] 2xl:mr-[100px]">
					<h3 className="mb-[20px] md:mb-[30px] xl:mb-[46px] text-[16px] md:text-[20px] font-inter font-light md:font-bold text-white">
						{ t('services') }
					</h3>
					<ul className="flex flex-col gap-[10px]">
						<li className="text-[12px] font-inter font-extralight text-white">
							{ t('servicesList.lawn') }
						</li>
						<li className="text-[12px] font-inter font-extralight text-white">
							{ t('servicesList.planting') }
						</li>
						<li className="text-[12px] font-inter font-extralight text-white">
							{ t('servicesList.irrigation') }
						</li>
						<li className="text-[12px] font-inter font-extralight text-white">
							{ t('servicesList.pruning') }
						</li>
					</ul>
				</div>

				<div className="md:col-start-2 md:row-start-2  xl:col-start-3 xl:row-start-1">
					<h3 className="mb-[20px] md:mb-[30px] xl:mb-[46px] text-[16px] md:text-[20px] font-inter font-light md:font-bold text-white">
						{ t('contacts') }
					</h3>
					<ul className="flex flex-col gap-[10px]">
						<li className="text-[12px] font-inter font-extralight text-white">
							{ consultationForm('phoneNumber') }
						</li>
						<li className="text-[12px] font-inter font-extralight text-white">
							{ consultationForm('emailAddress') }
						</li>
					</ul>
				</div>

				<div className="col-span-2 md:col-span-1 md:col-start-2 xl:col-start-3 flex items-center justify-center md:justify-start gap-[20px] my-[50px] xl:mt-0">
					<SocialIcon
						icon={ <WhatsappIcon/> }
						href="https://wa.me/994506748535"
					/>
					<SocialIcon
						icon={ <FacebookIcon/> }
						href="https://facebook.com"
					/>
					<SocialIcon
						icon={ <TelegramIcon/> }
						href="https://t.me/farbioaz"
					/>
					<SocialIcon
						icon={ <InstagramIcon/> }
						href="https://instagram.com"
					/>
				</div>

				<p className="md:hidden col-span-2 md:col-span-1 md:row-start-3 md:col-start-1 text-[12px] font-inter font-extralight text-white text-center">
					{ t('copyright') }
				</p>
			</div>

			<div className="w-full h-px bg-white/30 mt-[40px] mb-[50px] self-center xl:w-[766px] 2xl:w-[1480px]"/>

			<div className="flex flex-col items-center gap-[8px]">
				<h4 className="text-[16px] font-inter font-light text-white text-center">
					{ t('orderWebsite') }
				</h4>
				<a
					href={ `tel:${ t('orderWebsitePhone').replace(/\s/g, '') }` }
					className="text-[12px] font-inter font-extralight text-white hover:opacity-80 transition-opacity"
				>
					{ t('orderWebsitePhone') }
				</a>
			</div>
		</footer>
	);
}