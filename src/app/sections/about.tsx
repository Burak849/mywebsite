'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/About.module.css';
import styled from 'styled-components';


const AboutSection: React.FC = () => {

    const texts = [
        "I am a Computer Engineer from Turkey.",
        "I love to code for Frontend Development.",
        "Let's build something aesthetic!"
    ];
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const speed = 100;
    const deleteSpeed = 50;
    const delay = 1500;

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (!isDeleting) {

            if (displayedText.length < texts[currentIndex].length) {
                timeout = setTimeout(() => {
                    setDisplayedText(
                        (prev) => prev + texts[currentIndex].charAt(displayedText.length)
                    );
                }, speed);
            } else {

                timeout = setTimeout(() => setIsDeleting(true), delay);
            }
        } else {

            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText((prev) => prev.slice(0, -1));
                }, deleteSpeed);
            } else {

                setIsDeleting(false);
                setCurrentIndex((prev) => (prev + 1) % texts.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, texts, currentIndex, speed, deleteSpeed, delay]);

    const handleDownload = () => {
        const fileUrl = '../media/burak_kurtulus_cv_eng.pdf'; 
        const fileName = 'Burak_Kurtulush_Resume.pdf'; 
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.click();
        link.remove();
    };


    return (
        <section className="fade-in" id="home">
            <div className={styles['about-container']}>
                <div className={styles['text-paragraf']}>
                    <div style={{ textShadow: 'none' }} className="group duration-500 -rotate-12 hover:-rotate-0 hover:skew-x-1 skew-x-0 hover:translate-x-6 hover:translate-y-10">
                        <div className="group-hover:duration-400 relative rounded-2xl w-60 h-32 bg-[rgb(1_16_27/_var(--tw-bg-opacity,_1))] text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-[10deg] before:rounded-2xl before:absolute before:content[''] before:bg-[rgb(10_150_150/_var(--tw-bg-opacity,_1))]
 before:right-3 before:top-0 before:w-60 before:h-28 before:-z-10">
                            <span className="text-2xl font-bold">Burak Kurtulush</span>
                            <p className="text-amber-300 font-thin">- Jr. Software Developer -</p>
                        </div>
                    </div>
                    <div>
                        <h2 style={{ fontSize: "5vh", color: 'white', textShadow: 'none' }}>Hello!</h2>
                        <p className={styles.pclass}>
                            {displayedText}
                            <span>|</span>
                        </p>
                        <h3 className={styles.h3class}>I am a passionate computer engineer with a focus on UI/UX and Front-end development, dedicated to crafting innovative and user-centric websites.</h3>
                    </div>
                    <StyledWrapper>

                        <div className="card">
                            <a className="social-link1" href="https://www.instagram.com/burak.krtlsh/">
                                <svg style={{ color: 'white' }} xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" fill="white">
                                    </path>
                                </svg>
                            </a>
                            <a className="social-link2" href="https://github.com/Burak849">
                                <svg viewBox="0 0 496 512" height="1em" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                                    </path>
                                </svg> </a>
                            <a className="social-link3" href="mailto:burakkurtulus018@gmail.com">
                                <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />

                                    <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z" fill="#ffffff" /> </g>

                                </svg>
                            </a>
                            <a className="social-link4" href="https://www.linkedin.com/in/burak-kurtulush/">
                                <svg fill="#fff" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                    </path>
                                </svg>
                            </a>
                            <a className="social-link5" href="https://leetcode.com/u/alasiff/">

                                <svg fill="#ffffff" width="16px" height="16px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z" />
                                    </g>

                                </svg>

                            </a>
                        </div>
                    </StyledWrapper>


                    <button onClick={handleDownload} className="cursor-pointer flex justify-evenly p-2 text-lg rounded-full text-white tracking-wider shadow-xl hover:bg-gray-800 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]">
                        Resume
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-7 animate-bounce">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                    </button>


                </div>

                <div className={styles.imgbg}>
                    <img src="../media/pp-removebg1.png" alt="Profile Image" className={styles['profile-image']} />
                </div>

            </div>
        </section>
    );
}

const StyledWrapper = styled.div`
#storage_number {
  font-family:Arial;
  font-size:1.5rem;
  margin:4rem auto 1rem auto;
  width:200px;
}

  .card {
    display: flex;
    height: 70px;
    width: 350px;
  }

  .card svg {
    position: absolute;
    display: flex;
    width: 60%;
    height: 100%;
    font-size: 24px;
    font-weight: 700;
    opacity: 1;
    transition: opacity 0.25s;
    z-index: 2;
    padding: 0.25rem;
    cursor: pointer;
  }

  .card .social-link1,.card .social-link2,.card .social-link3,.card .social-link4,.card .social-link5 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    color: whitesmoke;
    font-size: 24px;
    text-decoration: none;
    transition: 0.25s;
    border-radius: 50px;
  }

  .card svg {
    transform: scale(1);
  }

  .card .social-link1:hover {
    background: #f09433;
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
    animation: bounce_613 0.4s linear;
  }

  .card .social-link2:hover {
    background-color: #242c34;
    animation: bounce_613 0.4s linear;
  }

  .card .social-link3:hover {
    background-color: #EA4340;
    animation: bounce_613 0.4s linear;
  }

  .card .social-link4:hover {
    background-color: #0a66c2;
    animation: bounce_613 0.4s linear;
  }

  .card .social-link5:hover {
    background-color: #ff8000;
    animation: bounce_613 0.4s linear;
  }

  @keyframes bounce_613 {
    40% {
      transform: scale(1.4);
    }

    60% {
      transform: scale(0.8);
    }

    80% {
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }`;

export default AboutSection;
