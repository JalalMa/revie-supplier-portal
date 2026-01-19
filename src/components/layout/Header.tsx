'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from '../common/LanguageSwitcher';

export function Header() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (newLocale: 'en' | 'ar') => {
        router.replace(pathname, { locale: newLocale });
    };

    const isRTL = locale === 'ar';

    return (
        <>
            {/* Logo - Left for English, Right for Arabic */}
            <div className={`fixed top-4 z-50 ${isRTL ? 'right-4' : 'left-4'}`}>
                <Link href="/">
                    <Image
                        src={isRTL
                            ? '/assets/images/logo_Revie_primary_arabic.svg'
                            : '/assets/images/logo_Revie_primary_english.svg'
                        }
                        alt="Revie Logo"
                        width={120}
                        height={40}
                        priority
                        className="h-10 w-auto"
                    />
                </Link>
            </div>



            {/* Language Switcher - Right for English, Left for Arabic */}
            <div className={`fixed top-4 z-50 flex items-center gap-2 bg-background/80 backdrop-blur-sm border rounded-lg p-2 shadow-lg ${isRTL ? 'left-4' : 'right-4'}`}>
                <LanguageSwitcher />
            </div>
        </>
    );
}
