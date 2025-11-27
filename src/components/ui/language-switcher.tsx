'use client'

import * as React from 'react'
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
	Command,
	CommandGroup,
	CommandItem,
	CommandList,
} from '@/components/ui/command'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export default function LanguageSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const [open, setOpen] = React.useState(false)
	const [value, setValue] = React.useState(locale)
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return (
			<Button
				variant="outline"
				role="combobox"
				aria-expanded={ false }
				className="justify-between"
			>
				{ locale.toUpperCase() }
				<ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
			</Button>
		)
	}

	return (
		<Popover open={ open } onOpenChange={ setOpen }>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={ open }
					className="justify-between"
				>
					{ locale.toUpperCase() }
					<ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[90px] p-0">
				<Command>
					<CommandList>
						<CommandGroup>
							{ routing.locales.map((loc) => (
								<CommandItem
									key={ loc }
									value={ loc }
									onSelect={ (currentValue) => {
										router.replace(pathname, { locale: loc });
										setValue(currentValue === value ? '' : currentValue)
										setOpen(false)
									} }
								>
									<CheckIcon
										className={ cn(
											'mr-2 h-4 w-4',
											value === loc ? 'opacity-100' : 'opacity-0'
										) }
									/>
									{ loc.toUpperCase() }
								</CommandItem>
							)) }
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}