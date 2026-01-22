'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { FadeIn } from '@/components/common/FadeIn';

export default function HomePage() {
    const t = useTranslations('common');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <FadeIn className="max-w-2xl w-full space-y-8">
                <FadeIn delay={200} className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">
                        {t('welcome')} - {t('appName')}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        {t('Complete Design and Execution Made Easy for Every Space')}
                    </p>
                </FadeIn>

                <FadeIn delay={400} className="flex gap-4 justify-center flex-wrap">
                    <Link
                        href="/signup"
                        className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        {t('signup')}
                    </Link>
                    <Link
                        href="/login"
                        className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-primary/40 transition-colors"
                    >
                        {t('login')}
                    </Link>
                    <Link
                        href="/dashboard"
                        className="px-8 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-primary/40 transition-colors"
                    >
                        {t('dashboard')}
                    </Link>
                </FadeIn>

                <FadeIn delay={600} className="text-center mt-8">
                    <p className="text-sm text-muted-foreground">
                        {t('your supplier portal is here')}
                    </p>
                </FadeIn>
            </FadeIn>
        </div>
    );
}
