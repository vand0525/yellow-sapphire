import { useOutletContext } from 'react-router-dom';
import type { PageContext } from '../../app/types';
import { ServiceDetailDesktop } from './ServiceDetailDesktop';
import { ServiceDetailMobile } from './ServiceDetailMobile';

export function ServiceDetailPage() {
  const { isDesktop } = useOutletContext<PageContext>();
  return isDesktop ? <ServiceDetailDesktop /> : <ServiceDetailMobile />;
}
