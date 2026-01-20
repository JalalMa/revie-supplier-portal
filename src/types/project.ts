// Project type definitions
export type ProjectStatus = 'completed' | 'in_progress' | 'pending';

export interface Project {
    id: string;
    name: string;
    type: string;
    type_ar?: string;
    location: string;
    location_ar?: string;
    date: string;
    status: ProjectStatus;

}

// Status display configuration
export const STATUS_CONFIG: Record<ProjectStatus, { label: string; label_ar: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
    completed: { label: 'Completed', label_ar: 'مكتمل', variant: 'default' },
    in_progress: { label: 'In Progress', label_ar: 'قيد التنفيذ', variant: 'secondary' },
    pending: { label: 'Pending', label_ar: 'قيد الانتظار', variant: 'destructive' },
};
