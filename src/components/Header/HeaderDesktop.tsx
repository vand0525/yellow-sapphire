import { NavLink } from 'react-router-dom';
import { useBooking } from '../../hooks/useBooking';
import '../../styles/HeaderDesktop.css'

export function HeaderDesktop() {
  const { openBooking } = useBooking();

return (
    <header className="header-desktop">
      <div className="header-container">

        <NavLink to="/" className="logo-box">
          <img className="header-logo" src=".\src\assets\logo.svg" alt="" />
        </NavLink>

        <nav className="pages-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink className="active-page" to="/services">Services</NavLink>
          <NavLink to="/testimonials">Testimonials</NavLink>
        </nav>

          <button
            type="button"
            className="header-booking-btn"
            onClick={openBooking}
          >
            Book a Meeting
            <img 
                className='paper-plane-icon'
                src=".\src\assets\paper-plane.svg" 
                alt="paper-plane-icon"
            />
          </button>

      </div>
    </header>
  );
}
