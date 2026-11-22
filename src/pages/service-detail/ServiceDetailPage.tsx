import { useEffect, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import type { PageContext } from '../../app/types';
import { ServiceDetailDesktop } from './ServiceDetailDesktop';
import { ServiceDetailMobile } from './ServiceDetailMobile';
import { getServices} from '../../lib/services';
import { getTestimonials} from '../../lib/testimonials';
import type { Service } from '../../lib/services';
import type { Testimonial } from '../../lib/testimonials';



export function ServiceDetailPage() {
  const { isDesktop } = useOutletContext<PageContext>();
  const { slug } = useParams<{ slug: string }>();

  const [service, setService] = useState<Service | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  // FETCH SERVICES DATA =========================================================
  useEffect(() => {
    async function loadService() {
      try {
        setLoading(true);

        const services = await getServices();
        const selectedService = services.find(
          (item) => item.slug === slug
        );

        setService(selectedService ?? null);
      } catch (error) {
        console.error('Failed to load service:', error);
        setService(null);
      } finally {
        setLoading(false);
      }
    }

    loadService();
  }, [slug]);


  // FETCH TESTIMONIALS DATA =========================================================
useEffect(() => {
  async function loadTestimonials() {
    try {
      const data = await getTestimonials();
      setTestimonials(data);
    } catch (error) {
      console.error('Failed to load testimonials:', error);
      setTestimonials([]);
    }
  }
  loadTestimonials();
}, []);

  if (loading) return <p>Loading service...</p>;
  if (!service) return <p>Service not found.</p>;

  return isDesktop
          ? <ServiceDetailDesktop 
            services={service}
            testimonials={testimonials}
          />
          : <ServiceDetailMobile />;
}