import {sanityClient} from './sanityClient'

// created Service custom type with for major and minor services ------------------------------------------
export type Service = {
  _id: string
  name: string
  description: string
  category: 'major' | 'minor'
  imageUrl?: string | undefined
}

// request studio published data---------------------------------------------------------------------------
export async function getServices(): Promise<Service[]> {                // define structure of services
  return sanityClient.fetch<Service[]>(`
    *[_type == "service"] | order(_createdAt asc) {
      _id,
      name,
      description,
      category,
      "imageUrl": image.asset->url
    }
  `)
}
