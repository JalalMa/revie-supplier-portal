'use client';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Construction, Home } from 'lucide-react';

interface ComingSoonProps {
    title?: string;
    description?: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
    const t = useTranslations();
    const router = useRouter();

    return (
        <div className="min-h-[60vh] flex items-center justify-center p-4">
            <Card className="max-w-md w-full">
                <CardContent className="p-8 text-center space-y-6">
                    {/* Icon */}
                    <div className="flex justify-center">
                        <div className="bg-primary/10 p-6 rounded-full">
                            <Construction className="h-12 w-12 text-primary" />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-gray-900">
                            {title || t('common.comingSoon')}
                        </h2>
                        <p className="text-gray-600">
                            {description || t('common.comingSoonDescription')}
                        </p>
                    </div>

                    {/* Back Button */}
                    <Button
                        onClick={() => router.push('/en/dashboard')}
                        className="gap-2"
                        size="lg"
                    >
                        <Home className="h-4 w-4" />
                        {t('common.backToHome')}
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
