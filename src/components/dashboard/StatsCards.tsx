'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent } from '@/components/ui/card';
import { FolderKanban, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { Project } from '@/types/project';

interface StatsCardsProps {
    projects: Project[];
}

export function StatsCards({ projects }: StatsCardsProps) {
    const t = useTranslations();

    const totalProjects = projects.length;
    const completedProjects = projects.filter(p => p.status === 'completed').length;
    const inProgressProjects = projects.filter(p => p.status === 'in_progress').length;
    const pendingProjects = projects.filter(p => p.status === 'pending').length;

    const stats = [
        {
            title: t('dashboard.stats.total'),
            value: totalProjects,
            icon: FolderKanban,
            color: 'text-blue-600',
            bgColor: 'bg-blue-100',
        },
        {
            title: t('dashboard.stats.completed'),
            value: completedProjects,
            icon: CheckCircle2,
            color: 'text-green-600',
            bgColor: 'bg-green-100',
        },
        {
            title: t('dashboard.stats.inProgress'),
            value: inProgressProjects,
            icon: Clock,
            color: 'text-orange-600',
            bgColor: 'bg-orange-100',
        },
        {
            title: t('dashboard.stats.pending'),
            value: pendingProjects,
            icon: AlertCircle,
            color: 'text-yellow-600',
            bgColor: 'bg-yellow-100',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                    <Card key={stat.title} className="overflow-hidden shadow-xl shadow-primary/40 hover:translate-y-2 transition-all duration-300 ease-in-out">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm md:text-xs xl:text-sm font-medium text-gray-600 mb-1">
                                        {stat.title}
                                    </p>
                                    <p className="text-3xl md:text-2xl xl:text-3xl font-bold text-gray-900">
                                        {stat.value}
                                    </p>
                                </div>
                                <div className={`${stat.bgColor} ${stat.color} p-3 rounded-full`}>
                                    <Icon className="h-6 w-6" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                );
            })}
        </div>
    );
}
