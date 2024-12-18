import React from 'react';
import styles from '../styles/Project.module.css';
import styled from 'styled-components';

const ProjectSection = () => {
    const projects = [
        { title: "Proje 1", githubLink: "#", readMoreLink: "#" },
        { title: "Proje 2", githubLink: "#", readMoreLink: "#" },
        { title: "Proje 3", githubLink: "#", readMoreLink: "#" },
        { title: "Proje 4", githubLink: "#", readMoreLink: "#" },
    ];

    return (
        <div style={{ padding:'3vh',height: '90vh', width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap:'15vh' }}>
            <h1 style={{ position: 'relative', textAlign: 'center', fontSize: '5vh', display: 'flex', justifyContent: 'center', color: 'white' }}>Projects</h1>
            
            <StyledWrapper>
                <div className="kaydirici">
                {projects.map((project, index) => (
                    <div className="card" key={index}>
                        <b />
                        <div className="content">
                            <p className="title">{project.title}</p><br />
                            <ul className="sci">
                                <li>
                                    <a href={project.githubLink}>
                                        Github
                                        <svg className="fa-brands fa-github" width={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.62 7.62 0 0 1 4.01 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href={project.readMoreLink}>
                                        Read More
                                        <svg className="fa-brands fa-twitter" width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M10.975 14.51a1.05 1.05 0 0 0 0-1.485 2.95 2.95 0 0 1 0-4.172l3.536-3.535a2.95 2.95 0 1 1 4.172 4.172l-1.093 1.092a1.05 1.05 0 0 0 1.485 1.485l1.093-1.092a5.05 5.05 0 0 0-7.142-7.142L9.49 7.368a5.05 5.05 0 0 0 0 7.142c.41.41 1.075.41 1.485 0zm2.05-5.02a1.05 1.05 0 0 0 0 1.485 2.95 2.95 0 0 1 0 4.172l-3.5 3.5a2.95 2.95 0 1 1-4.171-4.172l1.025-1.025a1.05 1.05 0 0 0-1.485-1.485L3.87 12.99a5.05 5.05 0 0 0 7.142 7.142l3.5-3.5a5.05 5.05 0 0 0 0-7.142 1.05 1.05 0 0 0-1.485 0z" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
          </div>
            </StyledWrapper>
      
        </div>
    );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2vh;

  .card {
    position: relative;
    width: 40vh;
    height: 30vh;
    background: #f00;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: slide 10s linear infinite;
  }
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg,#03a9f4,#ff0058);
  }

  .card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(315deg,#03a9f4,#ff0058);
    filter: blur(30px);
  }

  .card b {
    position: absolute;
    inset: 6px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
  }

  .card img {
    position: absolute;
    z-index: 3;
    scale: 0.8;
    opacity: 0.25;
    transition: 0.5s;
  }

  .card:hover img {
    scale: 0.5;
    opacity: 0.9;
    transform: translateY(-70px);
  }

  .card .content {
    position: absolute;
    z-index: 3;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: scale(0);
    transition: 0.5s;
  }

  .card:hover .content {
    transform: scale(1);
    bottom: 25px;
  }

  .content .title {
    position: relative;
    color: #fff;
    font-weight: 500;
    line-height: 1em;
    font-size: 1em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
  }

  .content .title span {
    font-weight: 300;
    font-size: 0.70em;
  }

  .content .sci {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 5px;
  }

  .sci li {
    list-style: none;
  }

  .sci li .fa-brands {
    width: 3vh;
  }

  .sci li .fa-github {
    width: 3vh;
  }

  .sci li a {
    position: relative;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.5);
    background: rgba(0, 0, 0, 0.2);
    fill: currentColor;
    width: 18vh;
    height: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    transition: 0.5s;
  }

  .sci li a:hover {
    fill: currentColor;
    color: rgba(255, 255, 255, 1);
  }
  
  @keyframes slide {
     0% {
      transform: translateX(calc(100%));
    }
    100% {
      transform: translateX(calc(0%));
    }
  }
  .kaydirici:hover .card{
      animation-play-state: paused;
  }
  .kaydirici{
      display: flex;
      flex-wrap: wrap;
      gap: 2vh;
      position: relative;
      width: 100%;
      height: 40vh;
      z-index:0;
  }

  `;


export default ProjectSection;
