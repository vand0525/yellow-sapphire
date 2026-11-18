import styles from './BookingDesktop.module.css';

type BookingDesktopProps = {
  close: () => void;
};

export function BookingDesktop({ close }: BookingDesktopProps) {
  return (
    <div className={styles.root}>
      <p>Booking (desktop)</p>
      <button type="button" onClick={close}>
        Close
      </button>
    </div>
  );
}
