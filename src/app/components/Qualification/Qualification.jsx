'use client';

import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import styles from './Qualification.module.css';

export default function Qualifications() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const qualifications = [
    {
      title: 'Full Stack Development',
      level: 'Expert',
      skills: ['React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Frontend Development',
      level: 'Expert',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Responsive Design', 'UI/UX']
    },
    {
      title: 'Backend Development',
      level: 'Advanced',
      skills: ['RESTful APIs', 'GraphQL', 'Microservices', 'Authentication', 'Database Design']
    },
    {
      title: 'DevOps & Tools',
      level: 'Intermediate',
      skills: ['Git', 'Docker', 'CI/CD', 'AWS', 'Linux', 'Testing']
    },
    {
      title: 'Soft Skills',
      level: 'Expert',
      skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Project Management']
    }
  ];

  return (
    <section id="qualifications" className={styles.qualifications} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Qualifications</h2>
          <div className={styles.grid}>
            {qualifications.map((qual, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.cardHeader}>
                  <h3>{qual.title}</h3>
                  <span className={`${styles.level} ${styles[qual.level.toLowerCase()]}`}>
                    {qual.level}
                  </span>
                </div>
                <div className={styles.skills}>
                  {qual.skills.map((skill, i) => (
                    <span key={i} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
