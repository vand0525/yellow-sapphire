import styles from './BookingMobile.module.css';

type BookingMobileProps = {
  close: () => void;
};

export function BookingMobile({ close }: BookingMobileProps) {
  return (
    <div className={styles.root}>
      <p>Booking (mobile)</p>
      <button type="button" onClick={close}>
        Close
      </button>
    </div>
  );
}
