'use client';

import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Education from './components/Education/Education';
import Qualification from './components/Qualification/Qualification';
import Certificates from './components/Certificates/Certificates';
import Resume from './components/Resume/Resume';
import TechTools from './components/TechTools/TechTools';
import Contact from './components/Contact/Contact';
import styles from './page.module.css';

export default function Home() {
  const [theme, setTheme] = useState('light');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={styles.container}>
      <Sidebar 
        theme={theme} 
        toggleTheme={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        closeMobileMenu={closeMobileMenu}
      />
      <main className={styles.main}>
        <Hero />
        <About />
        <Education />
        <Qualification />
        <Certificates />
        <Resume />
        <TechTools />
        <Contact />
      </main>
    </div>
  );
}
