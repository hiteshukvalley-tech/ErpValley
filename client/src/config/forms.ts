/* Choices offered by the lead forms. Each choice appears as written in the email the team receives. */

export const CONTACT_TOPICS = ['Sales', 'Support', 'Partnerships', 'Careers', 'Something else'] as const

export const COMPANY_SIZES = ['1-10', '11-50', '51-200', '201-500', '500+'] as const

export const DEMO_TIMES = ['Morning', 'Afternoon', 'Evening', 'Any time'] as const

export const TIMELINES = ['As soon as possible', 'Within 3 months', '3 to 6 months', 'More than 6 months', 'Just researching'] as const

export type LeadType = 'contact' | 'demo' | 'quote'
