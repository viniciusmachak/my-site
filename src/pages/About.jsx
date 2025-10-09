import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import styles from './About.module.css';
import profilePicture from '../assets/profile-pic2.jpeg';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.aboutSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.title}>{t('about.title')}</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.textColumn}>
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
            <p>{t('about.paragraph3')}</p>
          </div>
          
          <div className={styles.imageColumn}>
            <img src={profilePicture} alt={t('about.alt_image')} className={styles.aboutImage} />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;