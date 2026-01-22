'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const isRTL = locale === 'ar';
    const switchLanguage = (newLocale: 'en' | 'ar') => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className={`flex items-center gap-1 sm:gap-2 bg-background/80 backdrop-blur-sm border rounded-lg p-2 shadow-lg shadow-primary/20 `}>
            <Globe className="w-4 h-4 text-muted-foreground" />
            <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 rounded transition-colors text-sm sm:text-base  ${locale === 'en'
                    ? 'bg-primary text-primary-foreground cursor-not-allowed'
                    : 'hover:bg-secondary cursor-pointer'
                    }`}
            >
                English
            </button>
            <button
                onClick={() => switchLanguage('ar')}
                className={`px-3 py-1 rounded transition-colors text-sm sm:text-base ${locale === 'ar'
                    ? 'bg-primary text-primary-foreground cursor-not-allowed'
                    : 'hover:bg-secondary cursor-pointer'
                    }`}
            >
                العربية
            </button>
        </div>
    );
}
