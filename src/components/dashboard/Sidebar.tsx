'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { LayoutDashboard, FolderKanban, User, Settings, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import LanguageSwitcher from '../common/LanguageSwitcher';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const navigationItems = [
    { name: 'dashboard.nav.dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'dashboard.nav.projects', href: '/dashboard/projects', icon: FolderKanban },
    { name: 'dashboard.nav.profile', href: '/dashboard/profile', icon: User },
    { name: 'dashboard.nav.settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();
    const t = useTranslations();
    const locale = useLocale();
    const isRTL = locale === 'ar';

    return (
        <>
            {/* Mobile overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    'fixed top-0 h-full bg-white z-50 transition-transform duration-300 ease-in-out w-64',
                    isRTL ? 'right-0 border-l border-gray-200 lg:translate-x-0' : 'left-0 border-r border-gray-200 lg:translate-x-0',
                    isOpen ? 'translate-x-0' : (isRTL ? 'translate-x-full' : '-translate-x-full')
                )}
            >
                {/* Sidebar header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    {/* <h2 className="text-xl font-bold text-primary">Revie</h2> */}
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
                            className="h-8 w-auto"
                        />
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="lg:hidden"
                    >
                        <X className="h-5 w-5" />
                    </Button>
                </div>

                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    {navigationItems.map((item) => {
                        const isActive = pathname.endsWith(item.href);
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.href}
                                href={`/${locale}${item.href}`}
                                className={cn(
                                    'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
                                    'hover:bg-gray-100',
                                    isActive
                                        ? 'bg-primary/10 text-primary font-medium'
                                        : 'text-gray-700'
                                )}
                                onClick={() => onClose()}
                            >
                                <Icon className="h-5 w-5" />
                                <span>{t(item.name)}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Language Switcher - Mobile Only */}
                <div className="p-4 border-t border-gray-200 md:hidden">
                    <LanguageSwitcher />
                </div>
            </aside>
        </>
    );
}
