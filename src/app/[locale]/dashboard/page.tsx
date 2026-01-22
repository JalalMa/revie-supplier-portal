'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { ProjectFilters } from '@/components/dashboard/ProjectFilters';
import { ProjectsTable } from '@/components/dashboard/ProjectsTable';
import { MOCK_PROJECTS } from '@/lib/mock-projects';
import { Project, ProjectStatus } from '@/types/project';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FadeIn } from '@/components/common/FadeIn';

export default function DashboardPage() {
    const router = useRouter();
    const t = useTranslations();
    const [isLoading, setIsLoading] = useState(true);
    const [contactName, setContactName] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState<ProjectStatus | 'all'>('all');
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

    // Auth check
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('isAuthenticated');
        const supplierData = localStorage.getItem('supplier_data');

        if (!isAuthenticated || isAuthenticated !== 'true') {
            router.push('/en/login');
            return;
        }

        if (supplierData) {
            try {
                const data = JSON.parse(supplierData);
                setContactName(data.contactName || 'User');
            } catch (error) {
                console.error('Failed to parse supplier data:', error);
                setContactName('User');
            }
        }

        setIsLoading(false);
    }, [router]);

    // Delete project handler
    const handleDeleteProject = (projectId: string) => {
        setProjects((prevProjects) => prevProjects.filter((p) => p.id !== projectId));
    };

    // Filtering logic
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            // Filter by status
            const matchesStatus = statusFilter === 'all' || project.status === statusFilter;

            // Filter by search query (case-insensitive)
            const matchesSearch =
                searchQuery === '' ||
                project.name.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesStatus && matchesSearch;
        });
    }, [projects, searchQuery, statusFilter]);

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
                    <p className="mt-4 text-gray-600">{t('common.loading')}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mt-2">
            <DashboardLayout contactName={contactName}>
                <FadeIn className="space-y-6">
                    {/* Page Title */}
                    <FadeIn delay={100}>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">{t('dashboard.title')}</h2>
                            <p className="text-gray-600 mt-1">{t('dashboard.subtitle')}</p>
                        </div>
                    </FadeIn>

                    {/* Stats Cards */}
                    <FadeIn delay={200}>
                        <StatsCards projects={projects} />
                    </FadeIn>

                    {/* Projects Section */}
                    <FadeIn delay={300}>
                        <Card>
                            <CardHeader>
                                <CardTitle>{t('dashboard.projectsTitle')}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {/* Filters */}
                                <ProjectFilters
                                    searchQuery={searchQuery}
                                    statusFilter={statusFilter}
                                    onSearchChange={setSearchQuery}
                                    onStatusChange={(value) => setStatusFilter(value as ProjectStatus | 'all')}
                                />

                                {/* Table */}
                                <ProjectsTable
                                    projects={filteredProjects}
                                    onDeleteProject={handleDeleteProject}
                                />
                            </CardContent>
                        </Card>
                    </FadeIn>
                </FadeIn>
            </DashboardLayout>
        </div>
    );
}

