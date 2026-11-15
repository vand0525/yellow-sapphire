type BookingMobileProps = {
  close: () => void;
};

export function BookingMobile({ close }: BookingMobileProps) {
  return (
    <div>
      <p>Booking (mobile)</p>
      <button type="button" onClick={close}>
        Close
      </button>
    </div>
  );
}
