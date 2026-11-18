import { BookingDesktop } from './BookingDesktop';
import { BookingMobile } from './BookingMobile';
import './Booking.module.css';

type BookingProps = {
  isDesktop: boolean;
  close: () => void;
};

export function Booking({ isDesktop, close }: BookingProps) {
  return isDesktop ? (
    <BookingDesktop close={close} />
  ) : (
    <BookingMobile close={close} />
  );
}
