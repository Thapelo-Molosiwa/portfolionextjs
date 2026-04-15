'use client';

import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import styles from './Resume.module.css';

export default function Resume() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2021 - Present',
      responsibilities: [
        'Lead development of enterprise web applications using React and Node.js',
        'Architected microservices infrastructure serving 1M+ users',
        'Mentored junior developers and conducted code reviews',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      period: '2019 - 2021',
      responsibilities: [
        'Developed and maintained 10+ client projects using MERN stack',
        'Collaborated with designers to implement pixel-perfect UIs',
        'Optimized application performance improving load times by 40%',
        'Integrated third-party APIs and payment gateways'
      ]
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      period: '2018 - 2019',
      responsibilities: [
        'Built responsive websites using HTML, CSS, and JavaScript',
        'Assisted in backend development with Node.js and Express',
        'Participated in agile development processes',
        'Contributed to open-source projects'
      ]
    }
  ];

  return (
    <section id="resume" className={styles.resume} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Resume</h2>
          
          <div className={styles.downloadSection}>
            <p className={styles.downloadText}>
              Download my complete resume to learn more about my experience and qualifications.
            </p>
            <button className={styles.downloadButton} onClick={handleDownload}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Resume (PDF)
            </button>
          </div>

          <h3 className={styles.sectionTitle}>Work Experience</h3>
          <div className={styles.timeline}>
            {experience.map((job, index) => (
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
                    <div>
                      <h4>{job.title}</h4>
                      <p className={styles.company}>{job.company}</p>
                    </div>
                    <span className={styles.period}>{job.period}</span>
                  </div>
                  <ul className={styles.responsibilities}>
                    {job.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
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
