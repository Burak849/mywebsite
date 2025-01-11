'use client';

import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';


const CounterWrapper = styled.div`
  text-align: center;
  margin: 1rem;
  color: white;
  display:flex;
  flex-direction: column-reverse;

  .title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .count {
    font-size: 3rem;
    font-weight: bold;
    color: #fcd34d;
  }

  @media (max-width: 768px) {
    .title {
      font-size: 1.2rem;
    }

    .count {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 1rem;
    }

    .count {
      font-size: 1.5rem;
    }
  }
`;

const useCounterAnimation = (endValue: number, duration: number) => {
    const counterRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (counterRef.current) {
            gsap.fromTo(
                counterRef.current,
                { innerText: 0 },
                {
                    innerText: endValue,
                    duration: duration,
                    snap: { innerText: 1 },
                    ease: "power1.out",
                    onUpdate: function () {
                        if (counterRef.current) {
                            counterRef.current.innerText = `+${Math.ceil(
                                parseFloat(counterRef.current.innerText || "0")
                            )}`;
                        }
                    },
                }
            );
        }
    }, [endValue, duration]);

    return counterRef;
};

const Counter: React.FC<{ title: string; endValue: number; duration: number }> = ({
    title,
    endValue,
    duration,
}) => {
    const counterRef = useCounterAnimation(endValue, duration);

    return (
        <section className="fade-in">
            <CounterWrapper>
                <div className="title">{title}</div>
                <div className="count" ref={counterRef}>
                    0
                </div>
            </CounterWrapper>
        </section>
    );
};

const CounterGroupWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 10rem;
  height:15vh;
  background: transparent;

  @media (max-width: 480px){
      .section{
        display: flex;
        margin-top: 6rem;
        flex-wrap: wrap;
      }
  }



   @media (max-width: 1024px) {
    gap: 5rem;
  }

  @media (max-width: 768px) {
    display:grid;
    grid-template-columns:1fr 1fr;
    gap: 2rem;
    height:30vh;
  }
`;

const CounterGroup = () => {
    return (
        <CounterGroupWrapper>
            <Counter title="Completed Projects" endValue={20} duration={5} />
            <Counter title="Tools Learned" endValue={30} duration={5} />
            <Counter title="Coded Lines" endValue={32000} duration={5} />
            <Counter title="Satisfied Clients" endValue={10} duration={5} />
        </CounterGroupWrapper>
    );
};

export default CounterGroup;
