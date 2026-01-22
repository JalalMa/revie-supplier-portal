'use client';

import { useState } from 'react';
import { DashboardHeader } from './DashboardHeader';
import { Sidebar } from './Sidebar';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useLocale } from 'next-intl';

interface DashboardLayoutProps {
    contactName: string;
    children: React.ReactNode;
}

export function DashboardLayout({ contactName, children }: DashboardLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const locale = useLocale();
    const isRTL = locale === 'ar';

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            {/* Main Content Area */}
            <div className={isRTL ? 'lg:pr-64' : 'lg:pl-64'}>
                {/* Mobile menu button */}
                <div className={`lg:hidden fixed top-4 z-30 ${isRTL ? 'right-2' : 'left-2'}`}>
                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setSidebarOpen(true)}
                        className="bg-primary hover:bg-primary/80 cursor-pointer"
                    >
                        <Menu className="h-5 w-5" />
                    </Button>
                </div>

                {/* Header */}
                <DashboardHeader contactName={contactName} />

                {/* Page Content */}
                <main className="p-4 md:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
