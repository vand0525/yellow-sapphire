import { useBooking } from '../../hooks/useBooking';

export function FooterMobile() {
  const { openBooking } = useBooking();

  return (
    <footer>
      <p>Footer (mobile)</p>
      <button type="button" onClick={openBooking}>
        Book a meeting
      </button>
    </footer>
  );
}
