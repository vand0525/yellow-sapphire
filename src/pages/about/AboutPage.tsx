import { useOutletContext } from 'react-router-dom';
import type { PageContext } from '../../app/types';
import { AboutDesktop } from './AboutDesktop';
import { AboutMobile } from './AboutMobile';

export function AboutPage() {
  const { isDesktop } = useOutletContext<PageContext>();
  return isDesktop ? <AboutDesktop /> : <AboutMobile />;
}
