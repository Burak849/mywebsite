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
                        <p><span>HOVER ME</span></p>
                        <p><span>HOVER ME</span></p>
                        <p><span>HOVER ME</span></p>
                        <p><span>HOVER ME</span></p>
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
    flex: 4;
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
  }`;

export default ProjectSection;
