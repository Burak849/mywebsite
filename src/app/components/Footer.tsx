'use client';

import React from 'react';
import styles from '../styles/Footer.module.css';
import styled from 'styled-components';
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Footer = () => {

    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const isEmailValid = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // regex
  
  
  

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.surname || !formData.email || !formData.message) {
          alert("Please fill in all the fields before submitting.");
          return;
      }

        if (!isEmailValid(formData.email)) {
          alert("Please enter a valid email address.");
          return;
      }
        setStatus("loading");
        

        try {
            
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,  // Email.js service ID api keys in .env.local
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // Email.js template ID
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_USER_ID!      // Email.js user ID
            );

            if (result.status === 200) {
                setStatus('success');
                setFormData({ name: '', surname: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    const isFormValid = formData.name && formData.surname && formData.email && formData.message;
    

    return (


        <section className={`${styles.sectionclass} fade-in`} id="contact">

            <StyledWrapper>

                <article>
                    <div className={styles.contactContainer}>
                        <div className={styles.contactform}>
                            <h1 className={styles.h1class} style={{ position: 'relative', textAlign: 'center', fontSize: '5vh', display: 'flex', justifyContent: 'center', color: 'white' }}>Contact<span style={{ color: '#FCD34D', marginLeft: 10 }}>Me</span></h1>
                            <form className={styles.formclass}>

                                <div className="inputGroup">
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required autoComplete="off" />
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="inputGroup">
                                    <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} required autoComplete="off" />
                                    <label htmlFor="surname">Surname</label>
                                </div>
                                <div className="inputGroup">
                                    <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="off" />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="inputGroup">
                                    <textarea required id="message" name="message" value={formData.message} onChange={handleChange} autoComplete="off"></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>
                            </form>
                            <button type="submit" id="send" style={{ display: 'flex', gap: '1rem', alignItems: 'center', cursor: !isFormValid || status === "loading" ? (status === "loading" ? 'wait' : 'not-allowed') : 'pointer' }} className={styles['custom-button']} onClick={handleSubmit}  disabled={!isFormValid || status === "loading"} >
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
                            
                            {status === "success" && (
                                <div className={styles.successMessage}>Successfully sent!</div>
                            )}
                            {status === "error" && (
                                <div className={styles.errorMessage}>There was an error sending the message. Please try again.</div>
                            )}
                            {status === "loading" && (
                                <div className={styles.loadingMessage}>Sending...</div>
                            )}
                        </div>
                    </div>

                </article>
            </StyledWrapper>

        </section>



    );
}


const StyledWrapper = styled.div`
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
  }
`;

export default Footer;
