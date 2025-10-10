import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaExternalLinkAlt, FaPlayCircle, FaReact, FaAngular, FaDocker, FaJava, FaHtml5, FaCss3 } from 'react-icons/fa';
import { SiSpring, SiPostgresql, SiJavascript, SiTypescript } from 'react-icons/si';
import { useState } from 'react';
import styles from './Projects.module.css';

const techIcons = {
  'Spring Boot': <SiSpring />,
  'Java': <FaJava />,
  'Angular': <FaAngular />,
  'TypeScript': <SiTypescript />,
  'PostgreSQL': <SiPostgresql />,
  'Docker': <FaDocker />,
  'React': <FaReact />,
  'JavaScript': <SiJavascript />,
};

const projects = [
  {
    titleKey: 'projects.project1.title',
    descriptionKey: 'projects.project1.description',
    image: '/assets/SoundRate-pic.jpeg',
    videoUrl: 'https://www.youtube.com/embed/kSSXmqqYHyU?si=-GJUdmueXAu2B5j1',
    tags: ['Spring Boot', 'Java', 'Angular', 'TypeScript', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/viniciusmcabral/sound-rate.git',
    liveDemo: 'https://soundrate-05gm.onrender.com/',
  },
  {
    titleKey: 'projects.project2.title',
    descriptionKey: 'projects.project2.description',
    image: '/assets/MySite-pic.jpeg',
    videoUrl: '',
    tags: ['React', 'JavaScript'],
    github: 'https://github.com/viniciusmcabral/my-site.git',
    liveDemo: '',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const Projects = () => {
  const { t } = useTranslation();
  const [modalVideo, setModalVideo] = useState(null);

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('projects.title')}</h2>

        <motion.div
          className={styles.projectsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              variants={itemVariants}
            >
              <div className={styles.mediaContainer}>
                <img src={project.image} alt={t(project.titleKey)} className={styles.projectImage} />

                {project.videoUrl && (
                  <button
                    className={styles.playButton}
                    onClick={() => setModalVideo(project.videoUrl)}
                    aria-label={t('projects.play_video')}
                  >
                    <FaPlayCircle size={60} />
                  </button>
                )}
              </div>

              <div className={styles.projectContent}>
                <h3>{t(project.titleKey)}</h3>
                <p>{t(project.descriptionKey)}</p>
                <div className={styles.projectTags}>
                  {project.tags.map(tag => (
                    <div key={tag} className={styles.techIcon} title={tag}>
                      {techIcons[tag]}
                    </div>
                  ))}
                </div>

                <div className={styles.projectLinks}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <FaGithub size={20} /> GitHub
                    </a>
                  )}

                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FaExternalLinkAlt size={20} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {modalVideo && (
        <motion.div
          className={styles.videoModalBackdrop}
          onClick={() => setModalVideo(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className={styles.videoModalContent}
            onClick={e => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button className={styles.closeModalButton} onClick={() => setModalVideo(null)}>&times;</button>
            
            <iframe
              width="100%"
              height="100%"
              src={modalVideo}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Project Video"
            ></iframe>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;