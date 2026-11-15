import { FooterDesktop } from './FooterDesktop';
import { FooterMobile } from './FooterMobile';

type FooterProps = {
  isDesktop: boolean;
};

export function Footer({ isDesktop }: FooterProps) {
  return isDesktop ? <FooterDesktop /> : <FooterMobile />;
}
