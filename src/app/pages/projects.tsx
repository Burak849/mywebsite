import React from 'react';
import styles from '../styles/Project.module.css'; 
import styled from 'styled-components';

const ProjectSection = () => {

    return (
        <StyledWrapper>
            <div className="card">
                <div className="img-container">
                    <div className="img">
                    </div>
                    <div className="description card">
                        <span className="title">
                            Doctor's Referral Form
                        </span>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  /* From uiverse.io by @FrM-bot */
  .card {
    width: 200px;
    height: min-content;
    transition: all .3s;
    position: relative;
    border-radius: .5rem 2rem;
    box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.5);
  }

  .card:hover {
    transform: scale(1.03);
  }

  .img {
    transition: all .3s;
    background: #ff0084;
    background: -webkit-linear-gradient(to right, #33001b, #ff0084);
    background: linear-gradient(to right, #33001b, #ff0084);
    width: 100%;
  }

  .img:hover {
    transform: scale(1.3);
  }

  .img-container {
    display: grid;
    border-radius: .5rem 2rem;
    height: 270px;
    overflow: hidden;
  }

  .description {
    position: absolute;
    bottom: .5rem;
    left: .5rem;
    text-align: start;
    padding: .5rem 1em;
    width: 90%;
    transition: all 0.5s ease;
    text-overflow: ellipsis;
    white-space: nowrap;
    backdrop-filter: blur(.1rem);
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: .5rem 2rem;
  }

  .description:hover {
    transform: perspective(100px) translateX(7px) rotateX(3deg) rotateY(3deg) scale(1);
    box-shadow: none;
  }

  .title {
    color: aliceblue;
  }`;

export default ProjectSection;
