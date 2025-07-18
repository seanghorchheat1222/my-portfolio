import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import styles from './header.module.css'
const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location])

  return (
    <div>
<div>     
      <div className={`${styles.offscreenmenu} ${menuOpen ? styles.active : ''}`}>
        <ul style={{ listStyle: 'none', marginRight: '20px' }}>
          <li>
            <NavLink to="" className={({ isActive }) => (isActive ? styles.active : styles.text)} style={{ color: '#000000' }} >Home</NavLink>
          </li>
          <li >
            <NavLink to="/experience" className={({ isActive }) => (isActive ? styles.active : styles.text)} style={{ color: '#000000' }}>Experience</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : styles.text)} style={{ color: '#000000' }}>Contact</NavLink>
          </li>
        </ul>
      </div>
      <nav className={`${styles.nav} mt-2`} >
        <ul className={`${styles.ul} mb-5`}>
          <li >
            <NavLink to="" className={({ isActive }) => (isActive ? styles.active : styles.text)} >Home</NavLink>
          </li>
          <li >
            <NavLink to="/experience" className={({ isActive }) => (isActive ? styles.active : styles.text)}>Experience</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : styles.text)}>Contact</NavLink>
          </li>
        </ul>

      </nav>

      

      <div className={`${styles.hammenu} ${menuOpen ? styles.active : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>


    </div>
    

  )
}

export default Header;