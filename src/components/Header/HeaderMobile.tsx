import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useBooking } from '../../hooks/useBooking';
import { Logo } from '../../components/Logo/Logo';
import { Icon } from '../Icon/Icon';
import styles from './HeaderMobile.module.css'


export function HeaderMobile() {
  const { openBooking } = useBooking();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('up');

  
  {/* Hide header when scrolling down /show when scrolling Up -------------------- */}
  function toggleMenu(){
    setIsOpen(!isOpen);
  }

  useEffect(() => {

    let previousScroll = window.scrollY;

    function handleScroll() {
        const currentScroll = window.scrollY;

        if (currentScroll > previousScroll) {
            setScrollDirection('down');
        } else if (currentScroll < previousScroll) {
            setScrollDirection('up');
        }
        previousScroll = currentScroll;
    }
    window.addEventListener('scroll', handleScroll);

    // clearn memory
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };

}, []);



return (
        <header className={`${styles['header-container']}
            ${scrollDirection === 'down' && !isOpen
                ? styles['header-hidden']
                : ''}`}>

        <NavLink to="/" className={styles['header-logo']}>
          <Logo variant='headerMobile'  />
        </NavLink>

        <button
          className={styles['toggle-menu-btn']}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
        {isOpen ? '✕' : '☰'}
        </button>

        {isOpen && (
        <nav className={styles['pages-nav']} aria-label="Main navigation">
          <NavLink 
            onClick={toggleMenu}
            to="/" 
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '5px solid #f8ab03' : '5px solid #99907c'
            })}
          >
          Home
          </NavLink>

          <NavLink 
            to="/about" 
            onClick={toggleMenu}
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '5px solid #f8ab03' : '5px solid #99907c'
            })}
          >
          About
          </NavLink>

          <NavLink 
            to="/services" 
            onClick={toggleMenu}
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '5px solid #f8ab03' : '5px solid #99907c'
            })}
          >
          Services
          </NavLink>

          <NavLink 
            to="/testimonials" 
            onClick={toggleMenu}
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              borderBottom: isActive ? '5px solid #f8ab03' : '5px solid #99907c'
            })}
          >
          Testimonials
          </NavLink>

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
        </nav>
        )}

        {isOpen && (
          <div
              className={styles['menu-overlay']}
              onClick={toggleMenu}
              aria-hidden="true"
          />
        )}

        





    </header>
  );
}
