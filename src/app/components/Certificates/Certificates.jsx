'use client';

import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';  // Make sure this path is correct
import styles from './Certificates.module.css';

export default function Certificates() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: 'March 2023',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Professional Scrum Master I',
      issuer: 'Scrum.org',
      date: 'January 2023',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: 'November 2022',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Node.js Application Development',
      issuer: 'Linux Foundation',
      date: 'September 2022',
      image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: 'July 2022',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Google Cloud Associate Engineer',
      issuer: 'Google Cloud',
      date: 'May 2022',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="certificates" className={styles.certificates} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Certificates</h2>
          <div className={styles.grid}>
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.imageWrapper}>
                  <img src={cert.image} alt={cert.title} className={styles.image} />
                  <div className={styles.overlay}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </div>
                <div className={styles.content}>
                  <h3>{cert.title}</h3>
                  <p className={styles.issuer}>{cert.issuer}</p>
                  <p className={styles.date}>{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}