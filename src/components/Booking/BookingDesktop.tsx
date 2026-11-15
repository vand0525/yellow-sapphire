type BookingDesktopProps = {
  close: () => void;
};

export function BookingDesktop({ close }: BookingDesktopProps) {
  return (
    <div>
      <p>Booking (desktop)</p>
      <button type="button" onClick={close}>
        Close
      </button>
    </div>
  );
}
