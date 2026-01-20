'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import LanguageSwitcher from '../common/LanguageSwitcher';

interface DashboardHeaderProps {
    contactName: string;
}

export function DashboardHeader({ contactName }: DashboardHeaderProps) {
    const t = useTranslations();
    const router = useRouter();

    const handleLogout = () => {
        // Clear authentication data
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('supplier_data');

        // Redirect to login
        router.push('/en/login');
    };

    return (
        <header className="bg-white border-b border-gray-200 px-4 py-4 md:px-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-lg sm:text-2xl font-semibold ms-16 lg:ms-2 text-gray-900">
                        {t('dashboard.welcome')}{','}
                        <span className="text-primary font-bold">{contactName}</span>
                    </h1>
                </div>

                <div className="hidden md:flex items-center gap-2">
                    <LanguageSwitcher />
                </div>

                <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="flex items-center gap-2 hover:bg-primary/50 cursor-pointer"
                >
                    <LogOut className="h-4 w-4" />
                    <span className="hidden sm:inline">{t('common.logout')}</span>
                </Button>
            </div>
        </header>
    );
}
