import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import enMessages from '../messages/en.json';
import arMessages from '../messages/ar.json';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as 'en' | 'ar')) {
        locale = routing.defaultLocale;
    }

    // Use static imports for edge runtime compatibility
    const messages = locale === 'ar' ? arMessages : enMessages;

    return {
        locale,
        messages
    };
});
