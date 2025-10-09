import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaJava, FaNodeJs, FaReact, FaAngular, FaHtml5, FaCss3Alt, FaDatabase, FaDocker } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiSpring, SiGit } from 'react-icons/si';
import styles from './Skills.module.css';

const skills = [
  { name: 'Java', icon: <FaJava size={40} /> },
  { name: 'Spring Boot', icon: <SiSpring size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'TypeScript', icon: <SiTypescript size={40} /> },
  { name: 'React', icon: <FaReact size={40} /> },
  { name: 'Angular', icon: <FaAngular size={40} /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} /> },
  { name: 'SQL', icon: <FaDatabase size={40} /> },
  { name: 'Git', icon: <SiGit size={40} /> },
  { name: 'Docker', icon: <FaDocker size={40} /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('skills.title')}</h2>
        
        <motion.div
          className={styles.skillsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className={styles.skillCard}
              variants={itemVariants}
            >
              {skill.icon}
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;