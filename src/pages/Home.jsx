import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import profilePicture from '../assets/profile-pic.jpeg';

const Home = () => {
  const { t } = useTranslation();
  const descriptionItems = t('home.description').split('\n');

  return (
    <section id="home" className={styles.homeSection}>
      <motion.div
        className={styles.contentWrapper}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.textContainer}>
          <p className={styles.greeting}>{t('home.greeting')}</p>
          <h1 className={styles.name}>{t('home.name')}</h1>
          <h2 className={styles.title}>{t('home.title')}</h2>
          <ul className={styles.descriptionList}>
            {descriptionItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <a href="/Vinicius-Machak-CV.pdf" download className={styles.cvButton}>
            {t('home.download_cv')}
          </a>

          <nav className={styles.navQuestions}>
            <Link to="/about">{t('home.link_about')}</Link>
            <Link to="/skills">{t('home.link_skills')}</Link>
            <Link to="/projects">{t('home.link_projects')}</Link>
            <Link to="/contact">{t('home.link_contact')}</Link>
          </nav>
        </div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={profilePicture} alt={t('home.name')} className={styles.profileImage} />
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Home;
