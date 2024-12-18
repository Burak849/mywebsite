import React from 'react';
import styles from '../styles/Skill.module.css';
import styled from 'styled-components';

const SkillSection = () => {
            return (
        <div style={{ height: '50vh', width: 'auto', padding: '2vh', }}>
            <StyledWrapper>
                <div className="container">
                    <div className="skill-box">
                        <span className="title">HTML</span>
                        <div className="skill-bar">
                            <span className="skill-per html">
                                <span className="tooltip">80%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">CSS</span>
                        <div className="skill-bar">
                            <span className="skill-per css">
                                <span className="tooltip">70%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">JavaScript</span>
                        <div className="skill-bar">
                            <span className="skill-per javascript">
                                <span className="tooltip">50%</span>
                            </span>
                        </div>
                    </div>
                    <div className="skill-box">
                        <span className="title">TypeScript</span>
                        <div className="skill-bar">
                            <span className="skill-per nodejs">
                                <span className="tooltip">40%</span>
                            </span>
                        </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">NodeJS</span>
                                <div className="skill-bar">
                                    <span className="skill-per nodejs">
                                        <span className="tooltip">40%</span>
                                    </span>
                                </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">React</span>
                                <div className="skill-bar">
                                    <span className="skill-per nodejs">
                                        <span className="tooltip">50%</span>
                                    </span>
                                </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">Bootstrap</span>
                                <div className="skill-bar">
                                    <span className="skill-per nodejs">
                                        <span className="tooltip">70%</span>
                                    </span>
                                </div>
                            </div>
                            <div className="skill-box">
                                <span className="title">Tailwind CSS</span>
                                <div className="skill-bar">
                                    <span className="skill-per nodejs">
                                        <span className="tooltip">70%</span>
                                    </span>
                                </div>
                            </div>
                </div>
                    </StyledWrapper>
                </div>

            );
}

            const StyledWrapper = styled.div`
            .container {
                position: relative;
            max-width: 500px;
            width: 100%;
            background: transparent;
            margin: 0 15px;
            padding: 10px 20px;
            border-radius: 7px;
  }

            .container .skill-box {
                width: 100%;
            margin: 25px 0;
  }

            .skill-box .title {
                display: block;
            font-size: 14px;
            font-weight: 600;
            color: white;
  }

            .skill-box .skill-bar {
                height: 8px;
            width: 100%;
            border-radius: 6px;
            margin-top: 6px;
            background: rgba(0,0,0,0.1);
  }

            .skill-bar .skill-per {
                position: relative;
            display: block;
            height: 100%;
            width: 90%;
            border-radius: 6px;
            background: teal;
            animation: progress 0.4s ease-in-out forwards;
            opacity: 0;
  }

            .skill-per.html {
                /*progreso de las diferentes lenguajes*/
                width: 50%;
            animation-delay: 0.1s;
  }

            .skill-per.css {
                /*progreso de las diferentes lenguajes*/
                width: 70%;
            animation-delay: 0.1s;
  }

            .skill-per.javascript {
                /*progreso de las diferentes lenguajes*/
                width: 50%;
            animation-delay: 0.2s;
  }

            .skill-per.nodejs {
                /*progreso de las diferentes lenguajes*/
                width: 30%;
            animation-delay: 0.3s;
  }

            @keyframes progress {
                0 % {
                    width: 0;
                    opacity: 1;
                }

    100% {
                opacity: 1;
    }
  }

            .skill-per .tooltip {
                position: absolute;
            right: -14px;
            top: -28px;
            font-size: 9px;
            font-weight: 500;
            color: #fff;
            padding: 2px 6px;
            border-radius: 3px;
            background: #4070f4;
            z-index: 1;
  }

            .tooltip::before {
                content: '';
            position: absolute;
            left: 50%;
            bottom: -2px;
            height: 10px;
            width: 10px;
            z-index: -1;
            background-color: #4070f4;
            transform: translateX(-50%) rotate(45deg);
  }`;

export default SkillSection;
