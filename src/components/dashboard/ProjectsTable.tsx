'use client';

import { useTranslations } from 'next-intl';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project, STATUS_CONFIG } from '@/types/project';
import { FileX, CheckCircle2, Clock, AlertCircle, Eye, Trash2 } from 'lucide-react';
import { useLocale } from 'next-intl';

interface ProjectsTableProps {
    projects: Project[];
    onDeleteProject?: (projectId: string) => void;
}

// Status icons mapping
const STATUS_ICONS = {
    completed: CheckCircle2,
    in_progress: Clock,
    pending: AlertCircle,
};

export function ProjectsTable({ projects, onDeleteProject }: ProjectsTableProps) {
    const t = useTranslations();
    const locale = useLocale();
    const isArabic = locale === 'ar';

    if (projects.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-12 text-center">
                <FileX className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('dashboard.noProjects')}
                </h3>
                <p className="text-gray-500">
                    {t('dashboard.noProjectsDescription')}
                </p>
            </div>
        );
    }

    return (
        <div className="border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>{t('dashboard.projectName')}</TableHead>
                            <TableHead>{t('dashboard.type')}</TableHead>
                            <TableHead>{t('dashboard.location')}</TableHead>
                            <TableHead>{t('dashboard.date')}</TableHead>
                            <TableHead>{t('dashboard.status')}</TableHead>
                            <TableHead className="text-right">{t('dashboard.actions')}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.map((project) => {
                            const StatusIcon = STATUS_ICONS[project.status];
                            return (
                                <TableRow key={project.id}>
                                    <TableCell className="font-medium">{project.name}</TableCell>
                                    <TableCell>{isArabic ? project.type_ar : project.type}</TableCell>
                                    <TableCell>{isArabic ? project.location_ar : project.location}</TableCell>
                                    <TableCell>{new Date(project.date).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <Badge variant={STATUS_CONFIG[project.status].variant} className="flex items-center gap-1 w-fit">
                                            <StatusIcon className="h-3.5 w-3.5" />
                                            {isArabic ? STATUS_CONFIG[project.status].label_ar : STATUS_CONFIG[project.status].label}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-gray-600 hover:text-blue-600"
                                                title={t('dashboard.viewProject')}
                                            >
                                                <Eye className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="h-8 w-8 text-gray-600 hover:text-red-600"
                                                onClick={() => onDeleteProject?.(project.id)}
                                                title={t('dashboard.deleteProject')}
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
