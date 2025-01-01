import React from 'react';
import styles from '../styles/Project.module.css';
import styled from 'styled-components';

const ProjectSection = () => {




    return (
        <section className={styles.skillsection}>
            <article>
                <div>
                    <h1 style={{ position: 'relative', textAlign: 'center', fontSize: '2rem', display: 'flex', justifyContent: 'center', color: 'white' }}>My<span style={{ color: '#FCD34D', marginLeft: 10 }}>Projects</span></h1>
                </div>
            </article>

            <article className={styles.animbg}>
                <StyledWrapper>
                    <div className="card">
                        <p>
                            <span>Barber's' Reservation System <br />(CRM App)</span>
                            <button>Details</button>
                        </p>
                        <p>
                            <span>Hotel SPA with RestApi</span>
                            <button>Details</button>
                        </p>
                        <p>
                            <span>Portfolio</span>
                            <button>Details</button>
                        </p>
                        <p>
                            <span>Doctor's Referral Form</span>
                            <button>Details</button>
                        </p>
                        <p>
                            <span>Suber</span>
                            <button>Details</button>
                        </p>
                        <p>
                            <span>Eventolog</span>
                            <button>Details</button>
                        </p>
                    </div>
                </StyledWrapper>
            </article>


        </section>

    );
}
const StyledWrapper = styled.div`
  .card {
    width: 100%;
    height: 25rem;
    border-radius: 5px;
    background: black;
    border: 1px solid teal;
    display: flex;
    gap: .4em;
    padding: .4em;
    animation: animate 30s linear infinite;
  }

  @keyframes animate {
  100% {
    filter: hue-rotate(360deg);
  }
}
  .card p {
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 5px;
    transition: all .5s;
    background: linear-gradient(135deg, #f8fafc1a, #030711e6);
    box-shadow: 0px 0px 2px teal,
                0px 0px 2px teal inset;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card p:hover {
    flex: 6;
  }

  .card p span {
    min-width: 14em;
    padding: .5em;
    text-align: center;
    transform: rotate(-90deg);
    transition: all .5s;
    text-transform: uppercase;
    color: #fcd34d;
    letter-spacing: .1em;
    opacity: .3;
  }

  .card p:hover span {
    transform: rotate(0);
    opacity:1;
  }
  .card p button {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem 1rem;
    background-color: teal;
    color: white;
    border: none;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.5s;
    cursor: pointer;
    font-size: 0.9rem;
  }

  .card p:hover button {
    opacity: 1;
  }
  `;

export default ProjectSection;
