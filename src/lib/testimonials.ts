import {sanityClient} from './sanityClient'

// created Service custom type with for major and minor services ------------------------------------------
export type Testimonial = {
  _id: string
  name: string
  slug: string
  description: string
  serviceType: string
  clientName: string
  clientTitle: string
  companyName: string
  companyLocation: string
}

// request studio published data---------------------------------------------------------------------------
export async function getTestimonials(): Promise<Testimonial[]> {
  return sanityClient.fetch<Testimonial[]>(`
    *[_type == "testimonials"] | order(_createdAt asc) {
      _id,
      name,
      "slug": slug.current,
      description,
      serviceType,
      clientName,
      clientTitle,
      companyName,
      companyLocation,
    }
  `)
}
