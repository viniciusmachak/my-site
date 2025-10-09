import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';

const Layout = ({ currentTheme, toggleTheme }) => {
  return (
    <div className={styles.layoutContainer}>
      <Navbar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      
      <main className={styles.contentWrap}>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;