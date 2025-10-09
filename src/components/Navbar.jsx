import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiHome, FiMenu, FiX } from 'react-icons/fi';
import styles from './Navbar.module.css';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = ({ currentTheme, toggleTheme }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navItems}>
          <button className={styles.menuButton} onClick={toggleSidebar} aria-label={t('navbar.aria_open_menu')}>
            {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          {location.pathname !== '/' && (
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.homeLink} ${styles.active}` : styles.homeLink
              }
              aria-label={t('navbar.aria_go_home')}
              onClick={closeSidebar}
            >
              <FiHome size={22} />
            </NavLink>
          )}

          <div className={styles.navLinks}>
            <NavLink to="/about" onClick={closeSidebar} className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
              {t('navbar.about')}
            </NavLink>

            <NavLink to="/skills" onClick={closeSidebar} className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
              {t('navbar.skills')}
            </NavLink>

            <NavLink to="/projects" onClick={closeSidebar} className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
              {t('navbar.projects')}
            </NavLink>

            <NavLink to="/contact" onClick={closeSidebar} className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>
              {t('navbar.contact')}
            </NavLink>
          </div>

          <ThemeToggle currentTheme={currentTheme} toggleTheme={toggleTheme} />
          <LanguageSwitcher />
        </div>
      </nav>

      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <NavLink to="/" onClick={closeSidebar} className={styles.sidebarLink}>
          <FiHome size={22} />
        </NavLink>

        <NavLink to="/about" onClick={closeSidebar} className={styles.sidebarLink}>
          {t('navbar.about')}
        </NavLink>
        
        <NavLink to="/skills" onClick={closeSidebar} className={styles.sidebarLink}>
          {t('navbar.skills')}
        </NavLink>

        <NavLink to="/projects" onClick={closeSidebar} className={styles.sidebarLink}>
          {t('navbar.projects')}
        </NavLink>
        
        <NavLink to="/contact" onClick={closeSidebar} className={styles.sidebarLink}>
          {t('navbar.contact')}
        </NavLink>
      </div>

      {isSidebarOpen && <div className={styles.overlay} onClick={closeSidebar}></div>}
    </>
  );
};

export default Navbar;
