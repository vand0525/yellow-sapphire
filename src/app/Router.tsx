import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './AppLayout';
import { HomePage } from '../pages/home/HomePage';
import { AboutPage } from '../pages/about/AboutPage';
import { ServicesPage } from '../pages/services/ServicesPage';
import { ServiceDetailPage } from '../pages/service-detail/ServiceDetailPage';
import { TestimonialsPage } from '../pages/testimonials/TestimonialsPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'services', element: <ServicesPage /> },
        { path: 'services/:slug', element: <ServiceDetailPage /> },
        { path: 'testimonials', element: <TestimonialsPage /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
);
