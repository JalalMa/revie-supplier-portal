'use client';

import { useTranslations } from 'next-intl';
import { SupplierFormData, FormErrors } from '@/types/supplier';
import { COUNTRY_CODES } from '@/lib/signup-steps';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface StepContactInfoProps {
    data: SupplierFormData;
    errors: FormErrors;
    onChange: (field: keyof SupplierFormData, value: string) => void;
}

export function StepContactInfo({ data, errors, onChange }: StepContactInfoProps) {
    const t = useTranslations();

    return (
        <div className="space-y-6">
            {/* Contact Name */}
            <div className="space-y-2">
                <Label htmlFor="contactName">
                    {t('signup.contactPerson')} <span className="text-destructive">*</span>
                </Label>
                <Input
                    id="contactName"
                    value={data.contactName}
                    onChange={(e) => onChange('contactName', e.target.value)}
                    placeholder={t('signup.contactPersonPlaceholder')}
                    className={errors.contactName ? 'border-destructive' : ''}
                />
                {errors.contactName && (
                    <p className="text-sm text-destructive">{t(errors.contactName)}</p>
                )}
            </div>

            {/* Email */}
            <div className="space-y-2">
                <Label htmlFor="email">
                    {t('signup.emailAddress')} <span className="text-destructive">*</span>
                </Label>
                <Input
                    id="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => onChange('email', e.target.value)}
                    placeholder={t('signup.emailPlaceholder')}
                    className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                    <p className="text-sm text-destructive">{t(errors.email)}</p>
                )}
            </div>

            {/* Phone with Country Code */}
            <div className="space-y-2">
                <Label htmlFor="phone">
                    {t('signup.phoneNumber')} <span className="text-destructive">*</span>
                </Label>
                <div className="flex gap-2">
                    {/* Country Code Selector */}
                    <Select
                        value={data.countryCode}
                        onValueChange={(value) => onChange('countryCode', value)}
                    >
                        <SelectTrigger className="w-[7rem]">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {COUNTRY_CODES.map((code) => (
                                <SelectItem key={code.value} value={code.value}>
                                    {code.label} {code.flag}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    {/* Phone Number Input */}
                    <Input
                        id="phone"
                        type="tel"
                        value={data.phone}
                        onChange={(e) => onChange('phone', e.target.value)}
                        placeholder={t('signup.phoneNumberPlaceholder')}
                        className={`flex-1 ${errors.phone ? 'border-destructive' : ''}`}
                    />
                </div>
                {errors.phone && (
                    <p className="text-sm text-destructive">{t(errors.phone)}</p>
                )}
            </div>
        </div>
    );
}
