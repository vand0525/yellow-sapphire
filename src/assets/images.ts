import homeHero from './images/home-hero.png';
import aboutHero from './images/about-hero.png';
import aboutFounder from './images/about-founder.png';
import aboutStory from './images/about-story.png';
import serviceResponsibleAi from './images/service-responsible-ai.png';
import serviceAiConsulting from './images/service-ai-consulting.png';
import serviceGrantWriting from './images/service-grant-writing.png';
import serviceDetailHero from './images/service-detail-hero.png';
import serviceDetailExample1 from './images/service-detail-example-1.png';
import serviceDetailExample2 from './images/service-detail-example-2.png';
import serviceDetailExample3 from './images/service-detail-example-3.png';
import bookingStep1 from './images/booking-step-1.png';
import bookingStep2 from './images/booking-step-2.png';
import bookingStep3 from './images/booking-step-3.png';
import logo from './logo.svg';
import logoMark from './logo-mark.svg';

export const images = {
  logo,
  logoMark,
  homeHero,
  aboutHero,
  aboutFounder,
  aboutStory,
  serviceResponsibleAi,
  serviceAiConsulting,
  serviceGrantWriting,
  serviceDetailHero,
  serviceDetailExample1,
  serviceDetailExample2,
  serviceDetailExample3,
  bookingStep1,
  bookingStep2,
  bookingStep3,
} as const;

export type ImageKey = keyof typeof images;
