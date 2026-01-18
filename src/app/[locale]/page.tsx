import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function HomePage() {
    const t = useTranslations('common');

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <div className="max-w-2xl w-full space-y-8">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">
                        {t('welcome')} - {t('appName')}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Welcome to the Revie Supplier Portal
                    </p>
                </div>

                <div className="flex gap-4 justify-center flex-wrap">
                    <Link
                        href="/signup"
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        {t('signup')}
                    </Link>
                    <Link
                        href="/login"
                        className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                    >
                        {t('login')}
                    </Link>
                    <Link
                        href="/dashboard"
                        className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                    >
                        {t('dashboard')}
                    </Link>
                </div>

                <div className="text-center mt-8">
                    <p className="text-sm text-muted-foreground">
                        your supplier portal is here
                    </p>
                </div>
            </div>
        </div>
    );
}
