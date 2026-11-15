import { HeaderDesktop } from './HeaderDesktop';
import { HeaderMobile } from './HeaderMobile';

type HeaderProps = {
  isDesktop: boolean;
};

export function Header({ isDesktop }: HeaderProps) {
  return isDesktop ? <HeaderDesktop /> : <HeaderMobile />;
}
