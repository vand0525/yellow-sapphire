import { useOutletContext } from 'react-router-dom';
import type { PageContext } from '../../app/types';
import { ServicesDesktop } from './ServicesDesktop';
import { ServicesMobile } from './ServicesMobile';

export function ServicesPage() {
  const { isDesktop } = useOutletContext<PageContext>();
  return isDesktop ? <ServicesDesktop /> : <ServicesMobile />;
}
