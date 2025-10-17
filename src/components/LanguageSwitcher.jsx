import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.switcher}>
      <button
        onClick={() => changeLanguage('pt')}
        className={`${styles.button} ${i18n.language === 'pt' ? styles.active : ''}`}
        aria-label="Mudar para Português"
      >
        <ReactCountryFlag countryCode="BR" svg/>
      </button>

      <button
        onClick={() => changeLanguage('en')}
        className={`${styles.button} ${i18n.language === 'en' ? styles.active : ''}`}
        aria-label="Switch to English"
      >
        <ReactCountryFlag countryCode="US" svg/>
      </button>
    </div>
  );
};

export default LanguageSwitcher;