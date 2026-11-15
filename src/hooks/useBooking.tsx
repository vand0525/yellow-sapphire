import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import { Booking } from '../components/Booking/Booking';

type BookingContextValue = {
  openBooking: () => void;
  closeBooking: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

type BookingProviderProps = {
  isDesktop: boolean;
  children: ReactNode;
};

export function BookingProvider({
  isDesktop,
  children,
}: BookingProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    openBooking: () => setIsOpen(true),
    closeBooking: () => setIsOpen(false),
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
      {isOpen ? (
        <Booking isDesktop={isDesktop} close={value.closeBooking} />
      ) : null}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }

  return context;
}
