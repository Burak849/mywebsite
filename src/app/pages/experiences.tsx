import React from 'react';
import styles from '../styles/Experience.module.css';
import { relative } from 'path';

const ExperienceSection = () => {
    return (
        <div className={styles['spesifik']}>

            <div>
                <p style={{ position: 'relative', textAlign: 'center', fontSize: 34, display: 'flex', justifyContent: 'center', color: 'white' }}>About me</p>
                <img src="../media/rmvd-bg.png" alt="About Me Image" className={styles['fotom']} />

            </div>
        </div>

        
    );
};

export default ExperienceSection;
