import { useOutletContext } from 'react-router-dom';
import { useState, useEffect, use } from 'react';
import type { PageContext } from '../../app/types';
import { TestimonialsDesktop } from './TestimonialsDesktop';
import { TestimonialsMobile } from './TestimonialsMobile';
import './TestimonialsPage.module.css';
import type { Testimonial } from '../../lib/testimonials';
import { getTestimonials} from '../../lib/testimonials';

export function TestimonialsPage() {
  const { isDesktop } = useOutletContext<PageContext>();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function loadTestimonials(){
      try {
        setLoading(true);
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (error){
          console.error('Failed to load testimonials:', error);
          setTestimonials([]);
      } finally {
        setLoading(false);
      }
    }
    loadTestimonials();
  }, [])

  return isDesktop 
          ? <TestimonialsDesktop 
              testimonials={testimonials} 
            /> 
          : <TestimonialsMobile             
              testimonials={testimonials} 
            /> 
}
