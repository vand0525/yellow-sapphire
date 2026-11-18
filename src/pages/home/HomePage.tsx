import { useOutletContext } from 'react-router-dom';
import type { PageContext } from '../../app/types';
import { HomeDesktop } from './HomeDesktop';
import { HomeMobile } from './HomeMobile';
import './HomePage.module.css';

export function HomePage() {
  const { isDesktop } = useOutletContext<PageContext>();
  return isDesktop ? <HomeDesktop /> : <HomeMobile />;
}
