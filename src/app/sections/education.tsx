'use client';

import React from 'react';
import styles from '../styles/Education.module.css';

const Education = () => {
    return (
        <section className={`${styles.sectioncont} fade-in`} id="education">

            <article className={styles.cardbg}>
                <h2 className={styles.h2class}>Education</h2>
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <p style={{ fontSize:'small' }}>Turkiye</p>
                        <h3 className={styles.h3class}>Suleyman Demirel University | Computer Engineering</h3>
                        <p>2.71 GDP | Sep 2018 - Oct 2024</p>
                    </div>

                    <div className={styles.timelineItem}>
                        <p style={{ fontSize: 'small' }}>Lithuania</p>
                        <h3 className={styles.h3class}>Klaipeda State College | Informatics Engineering</h3>
                        <p>3.4 GDP | Jan 2022 - Jun 2022</p>
                    </div>
                </div>
            </article>

            <article className={`${styles.cardbg} ${styles.languages}`}>
                <h2 className={styles.h2class}>Languages</h2>
                <div>
                    <h3 className={styles.h3class}>Turkish - Native</h3>
                    <div className={styles.progressBar}>
                        <span style={{ width: '100%' }}></span>
                    </div>
                    <h3 className={styles.h3class}>English - B2 (Upper-Intermediate)</h3>
                    <div className={styles.progressBar}>
                        <span style={{ width: '70%' }}></span>
                    </div>
                    <h3 className={styles.h3class}>German - Elementary</h3>
                    <div className={styles.progressBar}>
                        <span style={{ width: '25%' }}></span>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Education;
