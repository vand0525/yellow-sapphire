import {sanityClient} from './sanityClient'

// created Service custom type with for major and minor services ------------------------------------------
export type Service = {
  _id: string
  name: string
  slug: string
  description: string
  category: 'major' | 'minor'
  imageUrl?: string | undefined
  whatWeDoDescription?: string;
  whatWeDo?: {
    _key: string;
    title: string;
    description?: string;
    imageUrl?: string | undefined;
  }[];
  whoWeHelpDescription?: string;
  whoWeHelp?: {
    _key: string;
    iconUrl?: string | undefined;
    title: string;
    description?: string;
  }[];
  howWeWorkDescription?: string;
  howWeWork?: {
    _key: string;
    title: string;
    description?: string;
  }[];
}

// request studio published data---------------------------------------------------------------------------
export async function getServices(): Promise<Service[]> {                // define structure of services
  return sanityClient.fetch<Service[]>(`
    *[_type == "service"] | order(_createdAt asc) {
      _id,
      name,
      "slug": slug.current,
      description,
      category,
      "imageUrl": image.asset->url,
      whatWeDoDescription,
      whatWeDo[]{
        _key,
        title,
        description,
        "imageUrl": image.asset->url,
      },
      whoWeHelpDescription,
      whoWeHelp[]{
        _key,
        "iconUrl": image.asset->url,
        title,
        description,
      },
      howWeWorkDescription,
      howWeWork[]{
        _key,
        title,
        description,
      },
    }
  `)
}
