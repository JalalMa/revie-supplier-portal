import { SupplierFormData, FormErrors, StepNumber } from '@/types/supplier';

/**
 * Validates Step 1: Company Details
 * Checks for required fields: companyName, licenseNumber, location
 */
export function validateCompanyDetails(data: SupplierFormData): FormErrors {
    const errors: FormErrors = {};

    if (!data.companyName.trim()) {
        errors.companyName = 'signup.validation.companyNameRequired';
    }

    if (!data.licenseNumber.trim()) {
        errors.licenseNumber = 'signup.validation.licenseRequired';
    }

    if (!data.country.trim()) {
        errors.country = 'signup.validation.countryRequired';
    }

    if (!data.city.trim()) {
        errors.city = 'signup.validation.cityRequired';
    }

    return errors;
}

/**
 * Validates Step 2: Service Categories
 * Ensures at least one service is selected
 * If "other" is selected, checks that otherService is filled
 */
export function validateServiceCategories(data: SupplierFormData): FormErrors {
    const errors: FormErrors = {};

    if (data.services.length === 0) {
        errors.services = 'signup.validation.servicesRequired';
    }

    // If "other" is selected, ensure text is provided
    if (data.services.includes('other') && !data.otherService.trim()) {
        errors.otherService = 'signup.validation.otherServiceRequired';
    }

    return errors;
}

/**
 * Validates Step 3: Contact Information
 * Checks for required fields and validates email/phone formats
 */
export function validateContactInfo(data: SupplierFormData): FormErrors {
    const errors: FormErrors = {};

    if (!data.contactName.trim()) {
        errors.contactName = 'signup.validation.contactPersonRequired';
    }

    if (!data.email.trim()) {
        errors.email = 'signup.validation.emailRequired';
    } else if (!isValidEmail(data.email)) {
        errors.email = 'signup.validation.emailInvalid';
    }

    if (!data.phone.trim()) {
        errors.phone = 'signup.validation.phoneRequired';
    } else if (!isValidPhone(data.phone)) {
        errors.phone = 'signup.validation.phoneInvalid';
    }

    return errors;
}

/**
 * Main validation function - routes to appropriate step validator
 */
export function validateStep(stepNumber: StepNumber, data: SupplierFormData): FormErrors {
    switch (stepNumber) {
        case 1:
            return validateCompanyDetails(data);
        case 2:
            return validateServiceCategories(data);
        case 3:
            return validateContactInfo(data);
        default:
            return {};
    }
}

/**
 * Email validation helper
 * Simple regex for basic email format validation
 */
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Phone validation helper
 * Now that country code is separate, validate just the phone number part
 */
function isValidPhone(phone: string): boolean {
    // Remove spaces and dashes for validation
    const cleaned = phone.replace(/[\s-]/g, '');

    // Accept 8-15 digits (international phone numbers without country code)
    // This covers most formats: 501234567, 01234567890, etc.
    const phoneRegex = /^\d{8,15}$/;

    return phoneRegex.test(cleaned);
}
