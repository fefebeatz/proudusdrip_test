import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

const baseStudioURL =
  process.env.NODE_ENV === 'production'
    ? `https://${process.env.VERCEL_URL}/proud-studio`
    : `${process.env.NEXT_PUBLIC_BASE_URL}/proud-studio`

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  stega: {
    studioUrl: baseStudioURL,
  },
})
