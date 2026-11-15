import { useBooking } from '../../hooks/useBooking';

export function FooterDesktop() {
  const { openBooking } = useBooking();

  return (
    <footer>
      <p>Footer (desktop)</p>
      <button type="button" onClick={openBooking}>
        Book a meeting
      </button>
    </footer>
  );
}
