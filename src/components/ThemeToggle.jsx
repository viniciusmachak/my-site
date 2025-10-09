import { FiSun, FiMoon } from 'react-icons/fi';
import styles from './ThemeToggle.module.css';

const ThemeToggle = ({ currentTheme, toggleTheme }) => {
  return (
    <button className={styles.toggleButton} onClick={toggleTheme}>
      {currentTheme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
    </button>
  );
};

export default ThemeToggle;