import React from 'react';
import styles from '../styles/Skill.module.css';

const SkillSection = () => {
    return (
        <div className={styles.skill}>

            <div className={styles.card1}>
                <h1>Front-end Development</h1>
                <br/>
            </div>
            <div className={styles.card2}>
                <h1>Back-end Development</h1>
                <br />
            </div>
            <div className={styles.card3}>
                <h1>Database Development</h1>
                <br />
            </div>
            <div className={styles.card4}>
                <h1>framworks</h1>
                <br />
            </div>
        </div>


    );
};

export default SkillSection;
