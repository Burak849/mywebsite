"use client";

import React from "react";
import styled from "styled-components";

const Loader = () => {

    

    return (
        <StyledWrapper>
            <div className="center-body">
                <div className="loader-circle-9">
                    Loading..
                    <span />
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
   .center-body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #0000;
    backdrop-filter: blur(8px);
    position: fixed; 
    top: 0;
    left: 0;
    z-index: 9999; 
  }

  .loader-circle-9 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10rem;
    height: 10rem;
    background: transparent;
    border: 3px solid #3c3c3c;
    border-radius: 50%;
    text-align: center;
    line-height: 70px;
    font-family: sans-serif;
    font-size: 1.2rem;
    color: #00eaff;
    text-transform: uppercase;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    transition: opacity 0.5s ease-out; 
    display:flex;
    align-items: center;
    justify-content: center;
  }

  .loader-circle-9:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid #00eaff;
    border-right: 3px solid #00eaff;
    border-radius: 50%;
    animation: animateC 2s linear infinite;
  }

  .loader-circle-9 span {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    transform-origin: left;
    animation: animate 2s linear infinite;
  }

  .loader-circle-9 span:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #00eaff;
    top: -8px;
    right: -6px;
    box-shadow: 0 0 20px #00eaff;
  }

  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }`;
export default Loader;
