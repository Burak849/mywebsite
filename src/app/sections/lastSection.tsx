import React from 'react';
import styles from '../styles/lastSection.module.css';
import styled from 'styled-components';
import { useState } from "react";

const lastSection = () => {
   
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

    return (

        <section>

            <article>
            <StyledWrapper>

                <form className={styles.contactform}>

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
                </StyledWrapper>

        </article>

    </section>

    );
}


const StyledWrapper = styled.div`
  .inputGroup {
    font-family: 'Segoe UI', sans-serif;
    margin: 1em 0 1em 0;
    max-width: 190px;
    position: relative;
  }

  .inputGroup input, .inputGroup textarea {
    font-size: 100%;
    padding: 0.8em;
    outline: none;
    border: 1px solid rgb(200, 200, 200);
    background-color: transparent;
    border-radius: 20px;
    width: 100%;
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
  background-color: #000b0d;
  color:white;
}

.inputGroup :is(input:focus, input:valid, textarea:focus, textarea:valid) {
  border-color: rgb(150, 150, 200);
  
}
`;

export default lastSection;
