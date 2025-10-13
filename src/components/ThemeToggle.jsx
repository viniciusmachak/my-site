import { FiSun, FiMoon } from 'react-icons/fi';
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ currentTheme, toggleTheme }) => {
  return (
    <button className={styles.toggleButton} onClick={toggleTheme}>
      {currentTheme === 'light' ? <FiMoon size={26} /> : <FiSun size={26} />}
    </button>
  );
};

export default ThemeToggle;