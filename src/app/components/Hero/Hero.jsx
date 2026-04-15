'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>
            Hi, I'm <span className={styles.highlight}>Your Name</span>
          </h1>
          <p className={styles.subtitle}>
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className={styles.description}>
            I craft beautiful, functional web experiences with modern technologies.
            Passionate about creating intuitive user interfaces and scalable backend systems.
          </p>
          <div className={styles.cta}>
            <button 
              className={styles.primaryButton}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
