// Supplier form data structure
export interface SupplierFormData {
    // Step 1: Company Details
    companyName: string;
    licenseNumber: string;
    country: string;
    city: string;

    // Step 2: Service Categories
    services: ServiceCategory[];
    otherService: string;

    // Step 3: Contact Information
    contactName: string;
    email: string;
    countryCode: string;
    phone: string;
}

// Available service categories
export type ServiceCategory =
    | 'carpentry'
    | 'painting'
    | 'electrical'
    | 'plumbing'
    | 'hvac'
    | 'flooring'
    | 'gardening'
    | 'other';

// Form validation errors
export interface FormErrors {
    companyName?: string;
    licenseNumber?: string;
    location?: string;
    country?: string;
    city?: string;
    services?: string;
    otherService?: string;
    contactName?: string;
    email?: string;
    phone?: string;
    countryCode?: string;
}

// Step identifiers
export type StepNumber = 1 | 2 | 3;

// Initial empty form data
export const initialFormData: SupplierFormData = {
    companyName: '',
    licenseNumber: '',
    country: '',
    city: '',
    services: [],
    otherService: '',
    contactName: '',
    email: '',
    countryCode: '+966',
    phone: '',
};
