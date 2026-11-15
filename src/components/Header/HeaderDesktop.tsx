import { NavLink } from 'react-router-dom';
import { useBooking } from '../../hooks/useBooking';

export function HeaderDesktop() {
  const { openBooking } = useBooking();

  return (
    <header>
      <p>Yellow Sapphire</p>
      <nav>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Home
        </NavLink>{' '}
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          About
        </NavLink>{' '}
        <NavLink
          to="/services"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Services
        </NavLink>{' '}
        <NavLink
          to="/testimonials"
          style={({ isActive }) => ({
            fontWeight: isActive ? 'bold' : 'normal',
          })}
        >
          Testimonials
        </NavLink>
      </nav>
      <button type="button" onClick={openBooking}>
        Book a meeting
      </button>
    </header>
  );
}
