import { NavLink } from 'react-router-dom';
import { useBooking } from '../../hooks/useBooking';
import { Logo } from '../../components/Logo/Logo';
import { Icon } from '../Icon/Icon';
import styles from './HeaderDesktop.module.css'

export function HeaderDesktop() {
  const { openBooking } = useBooking();

return (
    <header className={styles['header-container']}>

        <NavLink to="/" className={styles['header-logo']}>
          <Logo variant='headerDesktop'  />
        </NavLink>

        <nav className={styles['pages-nav']} aria-label="Main navigation">
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
            className={styles['header-booking-btn']}
            onClick={openBooking}
          >
            Book a Meeting
            <Icon
              name='send'
              className={styles['booking-icon']}
            >

            </Icon>
          </button>


    </header>
  );
}
