import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { BookingProvider } from '../hooks/useBooking';
import { DESKTOP_QUERY, useMediaQuery } from '../hooks/useMediaQuery';
import type { PageContext } from './types';

export function AppLayout() {
  const isDesktop = useMediaQuery(DESKTOP_QUERY);

  return (
    <BookingProvider isDesktop={isDesktop}>
      <div className="page-shell">
        <Header isDesktop={isDesktop} />
        <div className="page-main">
          <Outlet context={{ isDesktop } satisfies PageContext} />
        </div>
        <Footer isDesktop={isDesktop} />
      </div>
    </BookingProvider>
  );
}
