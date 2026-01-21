import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function LoginPage() {
    const t = useTranslations('auth');
    const tCommon = useTranslations('common');

    return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-primary/50 to-primary/10 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {t('loginTitle')}
                    </h1>
                </div>

                <form className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {t('email')}
                        </label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary "
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            {t('password')}
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <a href="#" className="text-primary hover:text-primary/80 dark:text-primary/80">
                            {t('forgotPassword')}
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/80 cursor-pointer text-white font-medium py-2 px-4 rounded-lg transition-colors"
                    >
                        {tCommon('login')}
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                    {t('noAccount')}{' '}
                    <Link href="/signup" className="text-primary hover:text-primary/80 dark:text-primary/80 font-medium">
                        {t('signupLink')}
                    </Link>
                </div>

                <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
                    <p>This is a demo login page. Authentication not yet implemented.</p>
                </div>
            </div>
        </div>
    );
}
