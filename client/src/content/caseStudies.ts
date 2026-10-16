import type { CaseStudyContent } from './types'

/**
 * Published case studies.
 * Add only real projects with outcomes the client has verified and approved for publication.
 */
export const caseStudies: CaseStudyContent[] = []

export const caseStudyBySlug = new Map(caseStudies.map((c) => [c.slug, c]))
