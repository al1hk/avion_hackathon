import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2023-01-01', // Use the API version you prefer
  useCdn: false, // Set to true for faster responses (no real-time updates) // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export default client