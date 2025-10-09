import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import styles from './Contact.module.css';

const Contato = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        setStatusMessage(t('contact.success_message'));
        form.current.reset();
        setTimeout(() => setStatusMessage(''), 5000);
      }, (error) => {
        setStatusMessage(t('contact.error_message'));
        setTimeout(() => setStatusMessage(''), 5000);
      });
  };

  return (
    <section className={styles.contactSection}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.contentWrapper}>
          <div className={styles.infoColumn}>
            <h2 className={styles.title}>{t('contact.title')}</h2>
            <p className={styles.introText}>{t('contact.intro')}</p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <FiPhone />
                <span>+55 (71) 99925-9526</span>
              </div>

              <div className={styles.contactItem}>
                <FiMail />
                <span>vmachakcabral@gmail.com</span>
              </div>

              <div className={styles.contactItem}>
                <FiMapPin />
                <span>Salvador, Bahia - Brasil</span>
              </div>
            </div>
          </div>

          <div className={styles.formColumn}>
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="from_name">{t('contact.form_name')}</label>
                <input type="text" name="from_name" id="from_name" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="from_email">{t('contact.form_email')}</label>
                <input type="email" name="from_email" id="from_email" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">{t('contact.form_message')}</label>
                <textarea name="message" id="message" rows="5" required></textarea>
              </div>
              
              <button type="submit" className={styles.submitButton}>{t('contact.form_button')}</button>
            </form>
            {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contato;