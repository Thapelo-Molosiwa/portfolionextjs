'use client';

import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import styles from './About.module.css';

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>About Me</h2>
          <div className={styles.content}>
            <div className={styles.imageWrapper}>
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="Profile"
                className={styles.image}
              />
            </div>
            <div className={styles.text}>
              <p>
                I'm a passionate full-stack developer with over 5 years of experience building 
                web applications that solve real-world problems. My journey in tech started with 
                a curiosity about how things work, and it has evolved into a career dedicated to 
                creating exceptional digital experiences.
              </p>
              <p>
                I specialize in modern web technologies including React, Next.js, Node.js, and 
                various database systems. I believe in writing clean, maintainable code and 
                following best practices to deliver high-quality solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                blog posts and tutorials.
              </p>
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <h3>5+</h3>
                  <p>Years Experience</p>
                </div>
                <div className={styles.stat}>
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className={styles.stat}>
                  <h3>30+</h3>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
