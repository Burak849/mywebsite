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
        <CounterWrapper>
            <div className="title">{title}</div>
            <div className="count" ref={counterRef}>
                0
            </div>
        </CounterWrapper>
    );
};

const CounterGroupWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 10rem;
  height:15vh;
  background: transparent;
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
