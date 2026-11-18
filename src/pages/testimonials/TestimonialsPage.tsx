import { useOutletContext } from 'react-router-dom';
import type { PageContext } from '../../app/types';
import { TestimonialsDesktop } from './TestimonialsDesktop';
import { TestimonialsMobile } from './TestimonialsMobile';
import './TestimonialsPage.module.css';

export function TestimonialsPage() {
  const { isDesktop } = useOutletContext<PageContext>();
  return isDesktop ? <TestimonialsDesktop /> : <TestimonialsMobile />;
}
