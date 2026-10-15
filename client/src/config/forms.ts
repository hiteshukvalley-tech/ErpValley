/*
 * Choices offered by the lead forms. The API accepts exactly these values (server/src/validation/forms.ts);
 * a server test checks the two lists match, so change both together.
 * This file must stay free of React and icon imports, because the server test imports it.
 */

export const CONTACT_TOPICS = ['Sales', 'Support', 'Partnerships', 'Careers', 'Something else'] as const

export const COMPANY_SIZES = ['1-10', '11-50', '51-200', '201-500', '500+'] as const

export const TIMELINES = ['As soon as possible', 'Within 3 months', '3 to 6 months', 'More than 6 months', 'Just researching'] as const

export type LeadType = 'contact' | 'demo' | 'quote'
