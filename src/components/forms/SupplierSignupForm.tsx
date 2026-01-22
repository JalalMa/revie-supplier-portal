'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { SupplierFormData, FormErrors, StepNumber, initialFormData } from '@/types/supplier';
import { SIGNUP_STEPS, getTotalSteps, isFirstStep, isLastStep } from '@/lib/signup-steps';
import { validateStep } from '@/lib/validate-step';
import { StepCompanyDetails } from './StepCompanyDetails';
import { StepServiceCategories } from './StepServiceCategories';
import { StepContactInfo } from './StepContactInfo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Loader2 } from 'lucide-react';
import { FadeIn } from '@/components/common/FadeIn';

export function SupplierSignupForm() {
    const t = useTranslations();
    const router = useRouter();

    // Form state
    const [currentStep, setCurrentStep] = useState<StepNumber>(1);
    const [formData, setFormData] = useState<SupplierFormData>(initialFormData);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle field changes
    const handleFieldChange = (field: keyof SupplierFormData, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));

        // Clear error for this field when user starts typing
        if (errors[field]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[field];
                return newErrors;
            });
        }
    };

    // Navigate to next step
    const handleNext = () => {
        // Validate current step
        const stepErrors = validateStep(currentStep, formData);

        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }

        // Clear errors and move to next step
        setErrors({});
        setCurrentStep((prev) => Math.min(prev + 1, getTotalSteps()) as StepNumber);
    };

    // Navigate to previous step
    const handleBack = () => {
        setErrors({});
        setCurrentStep((prev) => Math.max(prev - 1, 1) as StepNumber);
    };

    // Handle form submission
    const handleSubmit = async () => {
        // Final validation
        const stepErrors = validateStep(currentStep, formData);

        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Save to localStorage
            localStorage.setItem('supplier_data', JSON.stringify(formData));
            localStorage.setItem('isAuthenticated', 'true');

            // Redirect to dashboard
            router.push('/dashboard');
        } catch (error) {
            console.error('Submission error:', error);
            setIsSubmitting(false);
        }
    };

    // Calculate progress percentage
    const progressPercentage = (currentStep / getTotalSteps()) * 100;

    // Get current step config
    const currentStepConfig = SIGNUP_STEPS[currentStep - 1];

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100 ">
            <FadeIn className="w-full max-w-2xl max-h-[70vh] md:max-h-[80vh] overflow-y-auto my-8">
                <Card>
                    <CardHeader>
                        <div className="space-y-4">
                            {/* Step Progress */}
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm text-muted-foreground">
                                    <span>{t('signup.stepProgress', { current: currentStep, total: getTotalSteps() })}</span>
                                    <span>{Math.round(progressPercentage)}%</span>
                                </div>
                                <Progress value={progressPercentage} className="h-3" />
                            </div>

                            {/* Step Title */}
                            <div>
                                <CardTitle className="text-2xl">{t(currentStepConfig.titleKey)}</CardTitle>
                                <CardDescription className="mt-2">
                                    {t(currentStepConfig.descriptionKey)}
                                </CardDescription>
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <div className="space-y-8">
                            {/* Render current step component */}
                            {currentStep === 1 && (
                                <StepCompanyDetails
                                    data={formData}
                                    errors={errors}
                                    onChange={handleFieldChange}
                                />
                            )}

                            {currentStep === 2 && (
                                <StepServiceCategories
                                    data={formData}
                                    errors={errors}
                                    onChange={handleFieldChange}
                                />
                            )}

                            {currentStep === 3 && (
                                <StepContactInfo
                                    data={formData}
                                    errors={errors}
                                    onChange={handleFieldChange}
                                />
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex justify-between pt-6">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handleBack}
                                    disabled={isFirstStep(currentStep) || isSubmitting}
                                    className="cursor-pointer"
                                >
                                    {t('common.previous')}
                                </Button>

                                {!isLastStep(currentStep) ? (
                                    <Button
                                        type="button"
                                        onClick={handleNext}
                                        disabled={isSubmitting}
                                        className="cursor-pointer"
                                    >
                                        {t('common.next')}
                                    </Button>
                                ) : (
                                    <Button
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                        {isSubmitting ? t('common.submitting') : t('common.submit')}
                                    </Button>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </FadeIn>
        </div>
    );
}
