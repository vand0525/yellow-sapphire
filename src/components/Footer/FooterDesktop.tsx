import { useBooking } from '../../hooks/useBooking';
import { NavLink } from 'react-router-dom';
import "../../styles/FooterDesktop.css"

export function FooterDesktop() {
  const { openBooking } = useBooking();

  return (
    <footer className="footer-desktop">

      <section className="footer-booking-section">
        <div>
          <h2 className='footer-booking-title'>Let's Discuss Your Next Steps.</h2>
          <p className='footer-booking-description'>
            Choose a time that works for you through Google Workspace
            and receive an automatic calendar invitation.
          </p>
        </div>

        <button
            type="button"
            className="footer-booking-btn"
            onClick={openBooking}
          >
            Book a Meeting
            <img 
                className='paper-plane-icon'
                src=".\src\assets\paper-plane.svg" 
                alt="paper-plane-icon"
            />
        </button>
      </section>


      <section className='footer-copyright-section'>
        <NavLink to="/" className="footer-logo-box">
          <img className="footer-logo" src=".\src\assets\logo.svg" alt="" />
        </NavLink>

        <div className='legal-nav'>
          <p>© {new Date().getFullYear()} Yellow Sapphire. All rights reserved.</p>
          <NavLink to="/privacy">Privacy</NavLink> |
          <NavLink to="/policy">Policy</NavLink> |
          <NavLink to="/Accessibility">Accessibility</NavLink>
        </div>

      </section>

    </footer>
  );
}
