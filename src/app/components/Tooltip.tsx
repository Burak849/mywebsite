import React from 'react';
import styled from 'styled-components';

const Tooltip = () => {
    return (
        <StyledWrapper>
            <div className="tooltip-container">
                <div className="tooltip">
                    <div className="profile">
                        <div className="user">
                            <div className="img">Ui</div>
                            <div className="details">
                                <div className="name">User</div>
                                <div className="username">@username</div>
                            </div>
                        </div>
                        <div className="about">500+ Connections</div>
                    </div>
                </div>
                <div className="text">
                    <a className="icon" href="https://freecodez.com/">
                        <div className="layer">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span className="fab fa-linkedin">
                                <svg viewBox="0 0 448 512" width="55px" height="55px">
                                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                                </svg>
                            </span>
                        </div>
                        <div className="text">LinkedIn</div>
                    </a>
                </div>
                <div className="text">
                    <a className="icon" href="#">
                        <div className="layer">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span className="instagramSVG">
                                <svg fill="white" className="svgIcon" viewBox="0 0 448 512" height="1.5em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                            </span>
                        </div>
                        <div className="text">Instagram</div>
                    </a>
                </div>
                <div className="text">
                    <a className="icon" href="#">
                        <div className="layer">
                            <span />
                            <span />
                            <span />
                            <span />
                            <span className="fab fa-github">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="55px" height="55px">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z" /></svg>
                            </span>
                        </div>
                        <div className="text">Github</div>
                    </a>
                </div>
            </div>
        </StyledWrapper>

    );
}

const StyledWrapper = styled.div`
  .tooltip-container {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 17px;
    border-radius: 10px;
  }

  .tooltip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s;
    border-radius: 15px;
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
      inset -5px -5px 15px rgba(255, 255, 255, 0.1),
      5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  }

  .profile {
    background: #2a2b2f;
    border-radius: 10px 15px;
    padding: 10px;
    border: 1px solid rgba(11, 63, 95, 1);
  }

  .tooltip-container:hover .tooltip {
    top: -150px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .icon {
    text-decoration: none;
    color: #fff;
    display: block;
    position: relative;
  }
  .layer {
    width: 55px;
    height: 55px;
    transition: transform 0.3s;
  }
  .icon:hover .layer {
    transform: rotate(-35deg) skew(20deg);
  }
  .layer span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border: 1px solid #fff;
    border-radius: 5px;
    transition: all 0.3s;
  }

  .layer span,
  .text {
    color: #1da1f2;
    border-color: #1da1f2;
  }

  .icon:hover.layer span {
    box-shadow: -1px 1px 3px #1da1f2;
  }
  .icon .text {
    position: absolute;
    left: 50%;
    bottom: -5px;
    opacity: 0;
    font-weight: 500;
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
  }
  .icon:hover .text {
    bottom: -35px;
    opacity: 1;
  }

  .icon:hover .layer span:nth-child(1) {
    opacity: 0.2;
  }
  .icon:hover .layer span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
  }
  .icon:hover .layer span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
  }
  .icon:hover .layer span:nth-child(4) {
    opacity: 0.8;
    transform: translate(15px, -15px);
  }
  .icon:hover .layer span:nth-child(5) {
    opacity: 1;
    transform: translate(20px, -20px);
  }

  .layer span.fab {
    font-size: 30px;
    line-height: 64px;
    text-align: center;
    fill: #1da1f2;
    background: #000;
    border:none;
  }
  .user {
    display: flex;
    gap: 10px;
  }
  .img {
    width: 50px;
    height: 50px;
    font-size: 25px;
    font-weight: 700;
    border: 1px solid #1da1f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  .name {
    font-size: 17px;
    font-weight: 700;
    color: #1da1f2;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 0;
    color: #fff;
  }
  .about {
    color: #ccc;
    padding-top: 5px;
  }
  .instagramSVG {
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    background: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }

  .githubSVG {
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: -webkit-linear-gradient(
    45deg,
    #211f1f 0%,
    #444444 25%,
    #2c2a2a 50%,
    #1d1c1c 75%,
    #0c0c0c 100%
  );
  background: linear-gradient(
    45deg,
    #211f1f 0%,
    #444444 25%,
    #2c2a2a 50%,
    #1d1c1c 75%,
    #0c0c0c 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#211f1f', endColorstr='#0c0c0c', GradientType=1 );
}

`;

export default Tooltip;