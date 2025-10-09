import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail, FiDownload, FiInstagram, FiPhoneCall, FiPhone } from 'react-icons/fi';
import styles from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <a href="#contact" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </a>

        <a href="https://github.com/viniciusmcabral" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub size={24} />
        </a>

        <a href="mailto:vmachakcabral@gmail.com" aria-label="Email">
          <FiMail size={24} />
        </a>

        <a href="https://www.instagram.com/vinicabr4l/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FiInstagram size={24} />
        </a>

        <a href="https://wa.me/5571999259526" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FiPhone size={24} />
        </a>
      </div>
      
      <p className={styles.copyright}>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
    </footer>
  );
};

export default Footer;