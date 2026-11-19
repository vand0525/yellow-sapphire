import { useBooking } from '../../hooks/useBooking';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../components/Logo/Logo';
import styles from "./FooterDesktop.module.css"

export function FooterDesktop() {
  const { openBooking } = useBooking();

  return (
    <footer className={styles['footer-desktop']}>

      <section className={styles['footer-booking-section']}>
        <div>
          <h2 className={styles['footer-booking-title']}  >Let's Discuss Your Next Steps.</h2>
          <p className={styles['footer-booking-description']}>
            Choose a time that works for you through Google Workspace
            and receive an automatic calendar invitation.
          </p>
        </div>

        <button
            type="button"
            className={styles['footer-booking-btn']}
            onClick={openBooking}
          >
            Book a Meeting
            <img 
                className={styles['paper-plane-icon']}
                src=".\src\assets\paper-plane.svg" 
                alt="paper-plane-icon"
            />
        </button>
      </section>


      <section className={styles['footer-copyright-section']}>
        <NavLink to="/" className={styles['footer-logo']}>
          <Logo variant='footerDesktop'  />
        </NavLink>

        <div className={styles['legal-nav']} >
          <p>© {new Date().getFullYear()} Yellow Sapphire. All rights reserved.</p>
          <NavLink to="/privacy">Privacy</NavLink> |
          <NavLink to="/policy">Policy</NavLink> |
          <NavLink to="/Accessibility">Accessibility</NavLink>
        </div>

      </section>

    </footer>
  );
}
