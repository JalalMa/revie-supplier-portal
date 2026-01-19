import { ServiceCategory } from '@/types/supplier';

// Step configuration
export interface StepConfig {
    number: number;
    titleKey: string;
    descriptionKey: string;
}

export const SIGNUP_STEPS: StepConfig[] = [
    {
        number: 1,
        titleKey: 'signup.step1Title',
        descriptionKey: 'signup.step1Description',
    },
    {
        number: 2,
        titleKey: 'signup.step2Title',
        descriptionKey: 'signup.step2Description',
    },
    {
        number: 3,
        titleKey: 'signup.step3Title',
        descriptionKey: 'signup.step3Description',
    },
];

// Available service categories
export const SERVICE_CATEGORIES: { value: ServiceCategory; labelKey: string }[] = [
    { value: 'carpentry', labelKey: 'signup.services.carpentry' },
    { value: 'painting', labelKey: 'signup.services.painting' },
    { value: 'electrical', labelKey: 'signup.services.electrical' },
    { value: 'plumbing', labelKey: 'signup.services.plumbing' },
    { value: 'hvac', labelKey: 'signup.services.hvac' },
    { value: 'flooring', labelKey: 'signup.services.flooring' },
    { value: 'gardening', labelKey: 'signup.services.gardening' },
    { value: 'other', labelKey: 'signup.services.other' },
];

// Countries configuration
export const COUNTRIES = [
    { value: 'saudi-arabia', labelKey: 'signup.countries.saudiArabia', flag: '🇸🇦' },
    { value: 'jordan', labelKey: 'signup.countries.jordan', flag: '🇯🇴' },
    { value: 'bahrain', labelKey: 'signup.countries.bahrain', flag: '🇧🇭' },
    { value: 'egypt', labelKey: 'signup.countries.egypt', flag: '🇪🇬' },
    { value: 'qatar', labelKey: 'signup.countries.qatar', flag: '🇶🇦' },
    { value: 'uae', labelKey: 'signup.countries.uae', flag: '🇦🇪' },
];

// Cities by country
export const CITIES_BY_COUNTRY: Record<string, { value: string; labelKey: string }[]> = {
    'saudi-arabia': [
        { value: 'riyadh', labelKey: 'signup.cities.riyadh' },
        { value: 'jeddah', labelKey: 'signup.cities.jeddah' },
        { value: 'mecca', labelKey: 'signup.cities.mecca' },
        { value: 'medina', labelKey: 'signup.cities.medina' },
        { value: 'dammam', labelKey: 'signup.cities.dammam' },
        { value: 'khobar', labelKey: 'signup.cities.khobar' },
        { value: 'dhahran', labelKey: 'signup.cities.dhahran' },
        { value: 'taif', labelKey: 'signup.cities.taif' },
        { value: 'other', labelKey: 'signup.cities.other' }
    ],
    jordan: [
        { value: 'amman', labelKey: 'signup.cities.amman' },
        { value: 'zarqa', labelKey: 'signup.cities.zarqa' },
        { value: 'irbid', labelKey: 'signup.cities.irbid' },
        { value: 'aqaba', labelKey: 'signup.cities.aqaba' },
        { value: 'other', labelKey: 'signup.cities.other' }
    ],
    bahrain: [
        { value: 'manama', labelKey: 'signup.cities.manama' },
        { value: 'muharraq', labelKey: 'signup.cities.muharraq' },
        { value: 'riffa', labelKey: 'signup.cities.riffa' },
        { value: 'other', labelKey: 'signup.cities.other' }
    ],
    egypt: [
        { value: 'cairo', labelKey: 'signup.cities.cairo' },
        { value: 'alexandria', labelKey: 'signup.cities.alexandria' },
        { value: 'giza', labelKey: 'signup.cities.giza' },
        { value: 'hurghada', labelKey: 'signup.cities.hurghada' },
        { value: 'other', labelKey: 'signup.cities.other' }
    ],
    qatar: [
        { value: 'doha', labelKey: 'signup.cities.doha' },
        { value: 'al-wakrah', labelKey: 'signup.cities.alWakrah' },
        { value: 'al-rayyan', labelKey: 'signup.cities.alRayyan' },
        { value: 'other', labelKey: 'signup.cities.other' }
    ],
    uae: [
        { value: 'dubai', labelKey: 'signup.cities.dubai' },
        { value: 'abu-dhabi', labelKey: 'signup.cities.abuDhabi' },
        { value: 'sharjah', labelKey: 'signup.cities.sharjah' },
        { value: 'ajman', labelKey: 'signup.cities.ajman' },
        { value: 'other', labelKey: 'signup.cities.other' }
    ],
};

// Country codes for phone numbers
export const COUNTRY_CODES = [
    { value: '+966', label: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { value: '+962', label: '+962', country: 'Jordan', flag: '🇯🇴' },
    { value: '+973', label: '+973', country: 'Bahrain', flag: '🇧🇭' },
    { value: '+20', label: '+20', country: 'Egypt', flag: '🇪🇬' },
    { value: '+974', label: '+974', country: 'Qatar', flag: '🇶🇦' },
    { value: '+971', label: '+971', country: 'UAE', flag: '🇦🇪' },
];

// Helper functions
export const getTotalSteps = (): number => SIGNUP_STEPS.length;

export const isFirstStep = (step: number): boolean => step === 1;

export const isLastStep = (step: number): boolean => step === getTotalSteps();

export const canGoBack = (step: number): boolean => step > 1;

export const canGoNext = (step: number): boolean => step < getTotalSteps();

export const getCitiesForCountry = (country: string) => {
    return CITIES_BY_COUNTRY[country] || [];
};
