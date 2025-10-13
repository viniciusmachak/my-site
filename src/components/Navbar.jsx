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
        <div className={styles.navLeft}>
          <button className={styles.menuButton} onClick={toggleSidebar} aria-label={t('navbar.aria_open_menu')}>
            <FiMenu size={28} />
          </button>
        </div>

        <div className={styles.desktopNav}>
          <div className={styles.navLinks}>
            <NavLink to="/" className={({ isActive }) => isActive ? `${styles.homeLink} ${styles.active}` : styles.homeLink} aria-label={t('navbar.aria_go_home')}>
              <FiHome size={24} />
            </NavLink>
            
            <NavLink to="/about" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>{t('navbar.about')}</NavLink>
            <NavLink to="/skills" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>{t('navbar.skills')}</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>{t('navbar.projects')}</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>{t('navbar.contact')}</NavLink>
          </div>
        </div>

        <div className={styles.navRight}>
          <ThemeToggle currentTheme={currentTheme} toggleTheme={toggleTheme} />
          <LanguageSwitcher />
        </div>
      </nav>

      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={closeSidebar} aria-label={t('navbar.aria_close_menu')}>
          <FiX size={28} />
        </button>

        <nav className={styles.sidebarLinks} onClick={closeSidebar}>
          <NavLink to="/" className={styles.sidebarLink}><FiHome size={22} /> <span>{t('navbar.home')}</span></NavLink>
          <NavLink to="/about" className={styles.sidebarLink}>{t('navbar.about')}</NavLink>
          <NavLink to="/skills" className={styles.sidebarLink}>{t('navbar.skills')}</NavLink>
          <NavLink to="/projects" className={styles.sidebarLink}>{t('navbar.projects')}</NavLink>
          <NavLink to="/contact" className={styles.sidebarLink}>{t('navbar.contact')}</NavLink>
        </nav>

        <div className={styles.sidebarControls}>
          <ThemeToggle currentTheme={currentTheme} toggleTheme={toggleTheme} />
          <LanguageSwitcher />
        </div>
      </div>

      {isSidebarOpen && <div className={styles.overlay} onClick={closeSidebar}></div>}
    </>
  );
};

export default Navbar;