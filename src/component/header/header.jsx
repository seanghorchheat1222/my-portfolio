import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'
import styles from './header.module.css'
const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isContactPage = () => {
    return location.pathname === '/contact'
  }

  const isContactPageTextColor = () => {
    return location.pathname === '/contact'
  }

  const getHamburgerColor = () => {
    if (menuOpen) return 'black';
    return isContactPageTextColor() ? 'white' : 'black'
  }

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


        <nav className={`${styles.nav}`} style={{ background: isContactPage() ? '#8DD5F2' : 'transparent' }}>
          <ul className={`${styles.ul}`}>
            <li >
              <NavLink to="" className={({ isActive }) => (isActive ? styles.active : styles.text)} style={{ color: isContactPageTextColor() ? 'white' : 'black' }} >Home</NavLink>
            </li>
            <li >
              <NavLink to="/experience" className={({ isActive }) => (isActive ? styles.active : styles.text)} style={{ color: isContactPageTextColor() ? 'white' : 'black' }}>Experience</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : styles.text)} style={{
                color: isContactPageTextColor() ? 'white' : 'black'
              }}>Contact</NavLink>
            </li>
          </ul>

        </nav>

        <div className={`${styles.menubackground} p-2`} style={{ background: isContactPage() ? '#8DD5F2' : 'transparent' }} >
          <div className={` ${styles.hammenu} ${menuOpen ? styles.active : ''}`} onClick={toggleMenu}>
            <span style={{ backgroundColor: getHamburgerColor() }}></span>
            <span style={{ backgroundColor: getHamburgerColor() }}></span>
            <span style={{ backgroundColor: getHamburgerColor() }}></span>
          </div>

        </div>



      </div>


    </div>


  )
}

export default Header;