'use client';

import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import styles from './Education.module.css';

export default function Education() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'University of Technology',
      period: '2018 - 2020',
      description: 'Specialized in Software Engineering and Artificial Intelligence. Graduated with honors.',
      achievements: [
        'GPA: 3.9/4.0',
        'Research on Machine Learning Applications',
        'Teaching Assistant for Data Structures'
      ]
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'State University',
      period: '2014 - 2018',
      description: 'Foundation in computer science fundamentals, algorithms, and software development.',
      achievements: [
        'Dean\'s List all semesters',
        'President of Computer Science Club',
        'Developed award-winning capstone project'
      ]
    }
  ];

  return (
    <section id="education" className={styles.education} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Education</h2>
          <div className={styles.timeline}>
            {education.map((item, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={styles.marker}></div>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <h3>{item.degree}</h3>
                    <span className={styles.period}>{item.period}</span>
                  </div>
                  <h4 className={styles.institution}>{item.institution}</h4>
                  <p className={styles.description}>{item.description}</p>
                  <ul className={styles.achievements}>
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
