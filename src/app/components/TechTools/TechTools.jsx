'use client';

import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import styles from './TechTools.module.css';

export default function TechTools() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const techCategories = [
    {
      category: 'Frontend',
      tools: [
        { name: 'React', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'CSS/SASS', level: 92 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      category: 'Backend',
      tools: [
        { name: 'Node.js', level: 90 },
        { name: 'Express', level: 88 },
        { name: 'Python', level: 75 },
        { name: 'GraphQL', level: 80 },
        { name: 'REST APIs', level: 92 }
      ]
    },
    {
      category: 'Database',
      tools: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MySQL', level: 78 },
        { name: 'Redis', level: 70 },
        { name: 'Firebase', level: 75 }
      ]
    },
    {
      category: 'DevOps & Tools',
      tools: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 78 },
        { name: 'Linux', level: 80 }
      ]
    }
  ];

  return (
    <section id="tech-tools" className={styles.techTools} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.title}>Tech Tools & Skills</h2>
          <div className={styles.grid}>
            {techCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className={styles.categoryCard}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                <h3 className={styles.categoryTitle}>{category.category}</h3>
                <div className={styles.toolsList}>
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className={styles.toolItem}>
                      <div className={styles.toolHeader}>
                        <span className={styles.toolName}>{tool.name}</span>
                        <span className={styles.toolLevel}>{tool.level}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <motion.div
                          className={styles.progress}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${tool.level}%` } : {}}
                          transition={{ duration: 1, delay: catIndex * 0.1 + toolIndex * 0.05 }}
                        ></motion.div>
                      </div>
                    </div>
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
