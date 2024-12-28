'use client';

import React from 'react';
import styles from '../styles/lastSection.module.css';
import stylenei from '../styles/About.module.css';
import styled from 'styled-components';
import { useState } from "react";

const LastSection = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }
    };

    const [isRocketLaunching, setIsRocketLaunching] = useState(false);

    const handleRocketLaunch = () => {
        setIsRocketLaunching(true);

        setTimeout(() => {
            setIsRocketLaunching(false);
        }, 3000);
    };

    return (


        <section style={{
            display: 'flex',
            justifyContent: 'space-around', alignItems: 'center'
        }}>

            <StyledWrapper>

                <article>
                    <div className={`rocket ${isRocketLaunching ? 'launching' : ''}`}>
                        <div className="rocket-body">
                            <div className="body" />
                            <div className="fin fin-left" />
                            <div className="fin fin-right" />
                            <div className="window" />
                        </div>
                        <div className="exhaust-flame" />
                        <ul className="exhaust-fumes">
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                        </ul>
                    </div>
                </article>
            </StyledWrapper>

            <StyledWrapper>

                <article>
                    <div className={styles.contactContainer}>
                        <div className={styles.contactform}>
                            <h1 style={{ position: 'relative', textAlign: 'center', fontSize: '5vh', display: 'flex', justifyContent: 'center', color: 'white' }}>Contact<span style={{ color: 'cyan', marginLeft: 10 }}>Me</span></h1>
                            <form style={{ display: 'flex', width: '25rem', flexDirection: 'column' }}>

                                <div className="inputGroup">
                                    <input type="text" id="name" required autoComplete="off" />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="inputGroup">
                                    <input type="text" id="Surname" required autoComplete="off" />
                                    <label htmlFor="Surname">Surname</label>
                                </div>
                                <div className="inputGroup">
                                    <input type="text" id="email" required autoComplete="off" />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="inputGroup">
                                    <textarea required id="message" autoComplete="off"></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>
                            </form>
                            <button type="submit" id="send" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className={stylenei['custom-button']} onClick={handleRocketLaunch}>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em">
                                        <g style={{ filter: 'url(#shadow)' }}>
                                            <path fill="currentColor" d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z" />
                                            <path fill="currentColor" d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z" />
                                        </g>
                                        <defs>
                                            <filter id="shadow">
                                                <feDropShadow floodOpacity="0.5" stdDeviation="0.6" dy={1} dx={0} />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                                Send Message
                            </button>
                        </div>
                    </div>

                </article>
            </StyledWrapper>

        </section>



    );
}


const StyledWrapper = styled.div`
 .rocket {
    position: relative;
    width: 80px;
    left: calc(50% - 40px);
    transition: transform 2.5s linear; 
  }

  .rocket.launching {
      transform:rotate(5deg);
        transform: translateY(-300rem); 
    }

  .rocket .rocket-body {
    width: 80px;
    left: calc(50% - 50px);
    animation: bounce 0.5s infinite;
  }

  .rocket .rocket-body .body {
    background-color: #dadada;
    height: 180px;
    left: calc(50% - 50px);
    border-top-right-radius: 100%;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-top: 5px solid #f5f5f5;
  }

  .rocket .rocket-body:before {
    content: '';
    position: absolute;
    left: calc(50% - 24px);
    width: 48px;
    height: 13px;
    background-color: #554842;
    bottom: -13px;
    border-bottom-right-radius: 60%;
    border-bottom-left-radius: 60%;
  }

  .rocket .window {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #a75248;
    left: calc(50% - 25px);
    top: 40px;
    border: 5px solid #b4b2b2;
  }

  .rocket .fin {
    position: absolute;
    z-index: -100;
    height: 55px;
    width: 50px;
    background-color: #a75248;
  }

  .rocket .fin-left {
    left: -30px;
    top: calc(100% - 55px);
    border-top-left-radius: 80%;
    border-bottom-left-radius: 20%;
  }

  .rocket .fin-right {
    right: -30px;
    top: calc(100% - 55px);
    border-top-right-radius: 80%;
    border-bottom-right-radius: 20%;
  }

  .rocket .exhaust-flame {
    position: absolute;
    top: 90%;
    width: 28px;
    background: linear-gradient(to bottom, transparent 10%, #f5f5f5 100%);
    height: 150px;
    left: calc(50% - 14px);
    animation: exhaust 0.2s infinite;
  }

  .rocket .exhaust-fumes li {
    width: 60px;
    height: 60px;
    background-color: #f5f5f5;
    list-style: none;
    position: absolute;
    border-radius: 100%;
  }

  .rocket .exhaust-fumes li:first-child {
    width: 200px;
    height: 200px;
    bottom: -300px;
    animation: fumes 5s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(2) {
    width: 150px;
    height: 150px;
    left: -120px;
    top: 260px;
    animation: fumes 3.2s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(3) {
    width: 120px;
    height: 120px;
    left: -40px;
    top: 330px;
    animation: fumes 3s 1s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(4) {
    width: 100px;
    height: 100px;
    left: -170px;
    animation: fumes 4s 2s infinite;
    top: 380px;
  }

  .rocket .exhaust-fumes li:nth-child(5) {
    width: 130px;
    height: 130px;
    left: -120px;
    top: 350px;
    animation: fumes 5s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(6) {
    width: 200px;
    height: 200px;
    left: -60px;
    top: 280px;
    animation: fumes2 10s infinite;
  }

  .rocket .exhaust-fumes li:nth-child(7) {
    width: 100px;
    height: 100px;
    left: -100px;
    top: 320px;
  }

  .rocket .exhaust-fumes li:nth-child(8) {
    width: 110px;
    height: 110px;
    left: 70px;
    top: 340px;
  }

  .rocket .exhaust-fumes li:nth-child(9) {
    width: 90px;
    height: 90px;
    left: 200px;
    top: 380px;
    animation: fumes 20s infinite;
  }


  @keyframes fumes {
    50% {
      transform: scale(1.5);
      background-color: transparent;
    }

    51% {
      transform: scale(0.8);
    }

    100% {
      background-color: #f5f5f5;
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0% {
      transform: translate3d(0px, 0px, 0);
    }

    50% {
      transform: translate3d(0px, -4px, 0);
    }

    100% {
      transform: translate3d(0px, 0px, 0);
    }
  }

  @keyframes exhaust {
    0% {
      background: linear-gradient(to bottom, transparent 10%, #f5f5f5 100%);
    }

    50% {
      background: linear-gradient(to bottom, transparent 8%, #f5f5f5 100%);
    }

    75% {
      background: linear-gradient(to bottom, transparent 12%, #f5f5f5 100%);
    }
  }

  @keyframes fumes2 {
    50% {
      transform: scale(1.1);
    }
  }

  @keyframes twinkle {
    80% {
      transform: scale(1.1);
      opacity: 0.7;
    }
  }

  .inputGroup {
    font-family: 'Segoe UI', sans-serif;
    margin: 1em 0 1em 0;
    position: relative;
  }

  .inputGroup input, .inputGroup textarea {
    font-size: 100%;
    padding: 0.8em;
    outline: none;
    border: 3px solid rgb(200, 200, 200);
    background-color: black;
    border-radius: 20px;
    width: 100%;
    height:auto;
    
  }

  .inputGroup label {
    font-size: 100%;
    position: absolute;
    left: 0;
    padding: 0.8em;
    margin-left: 0.5em;
    pointer-events: none;
    transition: all 0.3s ease;
    color: rgb(100, 100, 100);
  }

 .inputGroup :is(input:focus, input:valid, textarea:focus, textarea:valid) ~ label {
  transform: translateY(-50%) scale(.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: black;
  color:white;
}

.inputGroup :is(input:focus, input:valid, textarea:focus, textarea:valid) {
  border-color: rgb(150, 150, 200);
  
}
`;

export default LastSection;
