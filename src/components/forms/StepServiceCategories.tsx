'use client';

import { useTranslations } from 'next-intl';
import { SupplierFormData, FormErrors, ServiceCategory } from '@/types/supplier';
import { SERVICE_CATEGORIES } from '@/lib/signup-steps';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

interface StepServiceCategoriesProps {
    data: SupplierFormData;
    errors: FormErrors;
    onChange: (field: keyof SupplierFormData, value: any) => void;
}

export function StepServiceCategories({ data, errors, onChange }: StepServiceCategoriesProps) {
    const t = useTranslations();

    const handleServiceToggle = (service: ServiceCategory, checked: boolean) => {
        let updatedServices: ServiceCategory[];

        if (checked) {
            updatedServices = [...data.services, service];
        } else {
            updatedServices = data.services.filter((s) => s !== service);

            // Clear "other" text if unchecking "other"
            if (service === 'other') {
                onChange('otherService', '');
            }
        }

        onChange('services', updatedServices);
    };

    const isOtherSelected = data.services.includes('other');

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <Label>
                    {t('signup.serviceCategories')} <span className="text-destructive">*</span>
                </Label>
                <p className="text-sm text-muted-foreground">{t('signup.selectServices')}</p>
            </div>

            {/* Service Checkboxes */}
            <div className="space-y-4">
                {SERVICE_CATEGORIES.map((service) => (
                    <div key={service.value} className="flex items-center space-x-3">
                        <Checkbox
                            id={service.value}
                            checked={data.services.includes(service.value)}
                            onCheckedChange={(checked) =>
                                handleServiceToggle(service.value, checked as boolean)
                            }
                        />
                        <Label
                            htmlFor={service.value}
                            className="text-sm font-normal cursor-pointer"
                        >
                            {t(service.labelKey)}
                        </Label>
                    </div>
                ))}
            </div>

            {errors.services && (
                <p className="text-sm text-destructive">{t(errors.services)}</p>
            )}

            {/* Conditional "Other" text input */}
            {isOtherSelected && (
                <div className="space-y-2 mt-4 pl-7">
                    <Label htmlFor="otherService">
                        {t('signup.otherServiceLabel')} <span className="text-destructive">*</span>
                    </Label>
                    <Input
                        id="otherService"
                        value={data.otherService}
                        onChange={(e) => onChange('otherService', e.target.value)}
                        placeholder={t('signup.otherServicePlaceholder')}
                        className={errors.otherService ? 'border-destructive' : ''}
                    />
                    {errors.otherService && (
                        <p className="text-sm text-destructive">{t(errors.otherService)}</p>
                    )}
                </div>
            )}
        </div>
    );
}
