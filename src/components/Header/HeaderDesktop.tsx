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
          <NavLink 
            to="/" 
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '5px solid #f8ab03' : 'none'
            })}
          >
          Home
          </NavLink>

                    <NavLink 
            to="/about" 
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '5px solid #f8ab03' : 'none'
            })}
          >
          About
          </NavLink>

                    <NavLink 
            to="/services" 
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '5px solid #f8ab03' : 'none'
            })}
          >
          Services
          </NavLink>

                    <NavLink 
            to="/testimonials" 
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '5px solid #f8ab03' : 'none'
            })}
          >
          Testimonials
          </NavLink>
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
