import React from 'react';
import styles from '../styles/Navbar.module.css'; 


const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarbg}>

                <a className={`${styles.link} ${styles['home-link']}`} href="#home">
                    <span className={`${styles['left-angle']}`}>&lt;</span>
                    <div>
                        <span className={`${styles['left-angle']}`}>&lt;</span>Home
                    </div>
                    <span className={`${styles['right-angle']}`}>/&gt;</span>
                </a>
                <a className={styles.link} href="#about-me">
                    <span className={`${styles['left-angle']}`}>&lt;</span>
                    <div>
                        <span className={`${styles['left-angle']}`}>&lt;</span>About Me
                    </div>
                    <span className={`${styles['right-angle']}`}>/&gt;</span>
                </a>
                <a className={styles.link} href="#skills">
                    <span className={`${styles['left-angle']}`}>&lt;</span>
                    <div>
                        <span className={`${styles['left-angle']}`}>&lt;</span>Skills
                    </div>
                    <span className={`${styles['right-angle']}`}>/&gt;</span>
                </a>
                <a className={styles.link} href="#projects">
                    <span className={`${styles['left-angle']}`}>&lt;</span>
                    <div>
                        <span className={`${styles['left-angle']}`}>&lt;</span>Projects
                    </div>
                    <span className={`${styles['right-angle']}`}>/&gt;</span>
                </a>
                <a className={styles.link} href="#resume">
                    <span className={`${styles['left-angle']}`}>&lt;</span>
                    <div>
                        <span className={`${styles['left-angle']}`}>&lt;</span>Resume
                    </div>
                    <span className={`${styles['right-angle']}`}>/&gt;</span>
                </a>
                <a className={styles.link} href="#contact">
                    <span className={`${styles['left-angle']}`}>&lt;</span>
                    <div>
                        <span className={`${styles['left-angle']}`}>&lt;</span>Contact
                    </div>
                    <span className={`${styles['right-angle']}`}>/&gt;</span>
                </a>
                {/*<div className="language-switch-container">*/}
                {/*    <input className="tgl tgl-style" id="toggle-language" type="checkbox" />*/}
                {/*    <label*/}
                {/*        className="tgl-btn"*/}
                {/*        htmlFor="toggle-language"*/}
                {/*        data-tg-off="DE"*/}
                {/*        data-tg-on="EN"*/}
                {/*    ></label>*/}
                {/*</div>*/}

            </div>
        </nav>
    );
};

export default Navbar;
