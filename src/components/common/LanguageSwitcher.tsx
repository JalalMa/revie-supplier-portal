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
        <div className={`flex items-center gap-2 bg-background/80 backdrop-blur-sm border rounded-lg p-2 shadow-lg `}>
            <Globe className="w-4 h-4 text-muted-foreground" />
            <button
                onClick={() => switchLanguage('en')}
                className={`px-3 py-1 rounded transition-colors ${locale === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-secondary'
                    }`}
            >
                English
            </button>
            <button
                onClick={() => switchLanguage('ar')}
                className={`px-3 py-1 rounded transition-colors ${locale === 'ar'
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-secondary'
                    }`}
            >
                العربية
            </button>
        </div>
    );
}
