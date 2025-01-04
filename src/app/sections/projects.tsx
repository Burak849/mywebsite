import React from 'react';
import styles from '../styles/Project.module.css';
import styled from 'styled-components';

const ProjectSection = () => {
    const projects = [
        {
            name: "Barber's Reservation System (CRM App)",
            image: "media/reservation-system.png",
            buttonText: "Github",
        },
        {
            name: "Hotel SPA with RestApi",
            image: "media/hote-booking-ss.png",
            buttonText: "Github",
        },
        {
            name: "Blog",
            image: "media/blog-ss.png",
            buttonText: "Github",
        },
        {
            name: "Doctor's Referral Form",
            image: "media/vizite2.png",
            buttonText: "Github",
            color: '#ff7171',
        },
        {
            name: "Eventolog",
            image: "media/eventolog2.png",
            buttonText: "Github",
            color: '#ff7171',

        },
    ];

    return (
        <section id="projects" className={styles.skillsection}>
            <article>
                <div>
                    <h1 style={{ position: 'relative', textAlign: 'center', fontSize: '2rem', display: 'flex', justifyContent: 'center', color: 'white' }}>
                        My<span style={{ color: '#FCD34D', marginLeft: 10 }}>Projects</span>
                    </h1>
                </div>
            </article>

            <article className={styles.animbg}>
                <div className={styles.container}>
                    <StyledWrapper>
                        <div className="card">
                            {projects.map((project, index) => (
                                <div className="cardItem" key={index} style={{ backgroundImage: `url(${project.image})` }}>
                                    <div>
                                        <p><span style={{ color: project.color } }>{project.name}</span></p>
                                    </div>
                                    <button type="button" className="btn-github">
                                        <svg width={25} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.99992 1.33331C7.12444 1.33331 6.25753 1.50575 5.4487 1.84078C4.63986 2.17581 3.90493 2.66688 3.28587 3.28593C2.03563 4.53618 1.33325 6.23187 1.33325 7.99998C1.33325 10.9466 3.24659 13.4466 5.89325 14.3333C6.22659 14.3866 6.33325 14.18 6.33325 14C6.33325 13.8466 6.33325 13.4266 6.33325 12.8733C4.48659 13.2733 4.09325 11.98 4.09325 11.98C3.78659 11.2066 3.35325 11 3.35325 11C2.74659 10.5866 3.39992 10.6 3.39992 10.6C4.06659 10.6466 4.41992 11.2866 4.41992 11.2866C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4066 6.59325 11.1133 6.77992 10.9466C5.29992 10.78 3.74659 10.2066 3.74659 7.66665C3.74659 6.92665 3.99992 6.33331 4.43325 5.85998C4.36659 5.69331 4.13325 4.99998 4.49992 4.09998C4.49992 4.09998 5.05992 3.91998 6.33325 4.77998C6.85992 4.63331 7.43325 4.55998 7.99992 4.55998C8.56659 4.55998 9.13992 4.63331 9.66659 4.77998C10.9399 3.91998 11.4999 4.09998 11.4999 4.09998C11.8666 4.99998 11.6333 5.69331 11.5666 5.85998C11.9999 6.33331 12.2533 6.92665 12.2533 7.66665C12.2533 10.2133 10.6933 10.7733 9.20659 10.94C9.44659 11.1466 9.66659 11.5533 9.66659 12.1733C9.66659 13.0666 9.66659 13.7866 9.66659 14C9.66659 14.18 9.77325 14.3933 10.1133 14.3333C12.7599 13.44 14.6666 10.9466 14.6666 7.99998C14.6666 7.1245 14.4941 6.25759 14.1591 5.44876C13.8241 4.63992 13.333 3.90499 12.714 3.28593C12.0949 2.66688 11.36 2.17581 10.5511 1.84078C9.7423 1.50575 8.8754 1.33331 7.99992 1.33331V1.33331Z" fill="currentcolor" />
                                        </svg>
                                        {project.buttonText}</button>
                                </div>
                            ))}
                        </div>
                    </StyledWrapper>
                </div>
            </article>
        </section>
    );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    gap: 0.4em;
    padding: 0.4em;
    width: 100%;
    height: 60vh;
    border-radius: 5px;
    background: transparent;
    border: 1px solid teal;
    box-shadow: 0px 0px 10px teal;
  }

  .cardItem {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    border: 1px solid teal;
    transition: all 0.5s;
    cursor: default;
    font-weight:800;
    overflow: hidden;
    position:relative;

  }

  .cardItem:hover {
    flex: 7;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    padding:2rem;
    backdrop-filter: blur(4px);
  }

  .cardItem span {
    transform: rotate(-90deg);
    text-transform: uppercase;
    color: #fcd34d;
    font-weight: 800;
    letter-spacing: 0.1em;
    opacity: 0.4;
    transition: all 0.5s;
    text-align: center;

  }

  .cardItem:hover span {
      font-size:1.2rem;
      font-weight:800;
      opacity: 1;
      
  }

  .cardItem p {
    margin: 0;
    text-align: center;
    color: white;
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 5px;
    width: auto;
    transform: rotate(-90deg);
    transition: opacity 0.4s, transform 0.3s;
    opacity: 0.4;
    height:auto;
    width:100%;
    backdrop-filter: blur(8px);
  }

  .cardItem button {
    margin-top:1rem;
    opacity: 0;
    transition: opacity 0.4s, transform 0.3s;
  }

  .cardItem:hover p,
  .cardItem:hover button {
    opacity: 1;
    transform: translateY(0);
  }

   .btn-github {
    cursor: pointer;
    display: flex;
    gap: 0.5rem;
    border: none;
    opacity:1;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    border-radius: 100px;
    font-weight: 800;
    place-content: center;
    padding: 0.75rem 1rem;
    font-size: 0.825rem;
    line-height: 1rem;
    background-color: rgba(0, 0, 0, 0.9);
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.04),
      inset 0 0 0 1px rgba(255, 255, 255, 0.04);
    color: #fff;
  }

  .btn-github:hover {
    box-shadow:
      inset 0 1px 0 0 rgba(255, 255, 255, 0.08),
      inset 0 0 0 1px rgba(252, 232, 3, 0.08);
    color: #fce803;
    background-color: rgba(0, 0, 0, 1);
  }

`;

export default ProjectSection;
