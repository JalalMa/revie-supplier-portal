'use client';

import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { ProjectStatus } from '@/types/project';
import { Search } from 'lucide-react';

interface ProjectFiltersProps {
    searchQuery: string;
    statusFilter: ProjectStatus | 'all';
    onSearchChange: (value: string) => void;
    onStatusChange: (value: ProjectStatus | 'all') => void;
}

export function ProjectFilters({
    searchQuery,
    statusFilter,
    onSearchChange,
    onStatusChange,
}: ProjectFiltersProps) {
    const t = useTranslations();

    return (
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Search Input */}
            <div className="flex-1 space-y-2">
                <Label htmlFor="search">{t('dashboard.search')}</Label>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                        id="search"
                        type="text"
                        placeholder={t('dashboard.searchPlaceholder')}
                        value={searchQuery}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="pl-10"
                    />
                </div>
            </div>

            {/* Status Filter */}
            <div className="w-full sm:w-48 space-y-2">
                <Label htmlFor="status">{t('dashboard.statusFilter')}</Label>
                <Select value={statusFilter} onValueChange={onStatusChange}>
                    <SelectTrigger id="status">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">{t('dashboard.statusAll')}</SelectItem>
                        <SelectItem value="completed">{t('dashboard.statusCompleted')}</SelectItem>
                        <SelectItem value="in_progress">{t('dashboard.statusInProgress')}</SelectItem>
                        <SelectItem value="pending">{t('dashboard.statusPending')}</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
