'use client';

import { useTranslations } from 'next-intl';
import { SupplierFormData, FormErrors } from '@/types/supplier';
import { COUNTRIES, getCitiesForCountry } from '@/lib/signup-steps';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

interface StepCompanyDetailsProps {
    data: SupplierFormData;
    errors: FormErrors;
    onChange: (field: keyof SupplierFormData, value: string) => void;
}

export function StepCompanyDetails({ data, errors, onChange }: StepCompanyDetailsProps) {
    const t = useTranslations();

    // Get cities for selected country
    const availableCities = data.country ? getCitiesForCountry(data.country) : [];

    // Reset city when country changes
    const handleCountryChange = (value: string) => {
        onChange('country', value);
        // Clear city selection when country changes
        onChange('city', '');
    };

    return (
        <div className="space-y-6">
            {/* Company Name */}
            <div className="space-y-2">
                <Label htmlFor="companyName">
                    {t('signup.companyName')} <span className="text-destructive">*</span>
                </Label>
                <Input
                    id="companyName"
                    value={data.companyName}
                    onChange={(e) => onChange('companyName', e.target.value)}
                    placeholder={t('signup.companyNamePlaceholder')}
                    className={errors.companyName ? 'border-destructive' : ''}
                />
                {errors.companyName && (
                    <p className="text-sm text-destructive">{t(errors.companyName)}</p>
                )}
            </div>

            {/* License Number */}
            <div className="space-y-2">
                <Label htmlFor="licenseNumber">
                    {t('signup.licenseNumber')} <span className="text-destructive">*</span>
                </Label>
                <Input
                    id="licenseNumber"
                    value={data.licenseNumber}
                    onChange={(e) => onChange('licenseNumber', e.target.value)}
                    placeholder={t('signup.licenseNumberPlaceholder')}
                    className={errors.licenseNumber ? 'border-destructive' : ''}
                />
                {errors.licenseNumber && (
                    <p className="text-sm text-destructive">{t(errors.licenseNumber)}</p>
                )}
            </div>

            {/* Location */}
            <div className="space-y-2">
                <Label htmlFor="location">
                    {t('signup.location')}
                </Label>

            </div>
            <div className="flex lg:flex-row flex-col gap-4 lg:gap-16">
                {/* Country */}
                <div className="space-y-2">
                    <Label htmlFor="country">
                        {t('signup.country')} <span className="text-destructive">*</span>
                    </Label>
                    <Select value={data.country} onValueChange={handleCountryChange}>
                        <SelectTrigger className={errors.country ? 'border-destructive' : ''}>
                            <SelectValue placeholder={t('signup.countryPlaceholder')} />
                        </SelectTrigger>
                        <SelectContent className="cursor-pointer">
                            {COUNTRIES.map((country) => (
                                <SelectItem key={country.value} value={country.value}>
                                    {country.flag} {t(country.labelKey)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.country && (
                        <p className="text-sm text-destructive">{t(errors.country)}</p>
                    )}
                </div>

                {/* City - Only shown when country is selected */}
                {data.country && (
                    <div className="space-y-2 cursor-pointer">
                        <Label htmlFor="city">
                            {t('signup.city')} <span className="text-destructive">*</span>
                        </Label>
                        <Select value={data.city} onValueChange={(value) => onChange('city', value)}>
                            <SelectTrigger className={errors.city ? 'border-destructive' : ''}>
                                <SelectValue placeholder={t('signup.cityPlaceholder')} />
                            </SelectTrigger>
                            <SelectContent className="cursor-pointer">
                                {availableCities.map((city) => (
                                    <SelectItem key={city.value} value={city.value}>
                                        {t(city.labelKey)}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.city && (
                            <p className="text-sm text-destructive">{t(errors.city)}</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
