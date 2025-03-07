import React from 'react';
import styled, { keyframes } from 'styled-components';

const sparkle = keyframes`
  0%, 100% {
    filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.7))
           drop-shadow(0 0 5px ${props => props.color})
           brightness(1);
  }
  25% {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.9))
           drop-shadow(0 0 8px ${props => props.color})
           brightness(1.2);
  }
  50% {
    filter: drop-shadow(0 0 8px rgba(255, 255, 255, 1))
           drop-shadow(0 0 12px ${props => props.color})
           brightness(1.5);
  }
  75% {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.9))
           drop-shadow(0 0 8px ${props => props.color})
           brightness(1.2);
  }
`;

const sway = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(15px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
  }
`;

const Heart = styled.div`
  position: fixed;
  bottom: -100px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.color};
  animation: 
    ${float} ${props => props.duration}s linear infinite,
    ${sway} 3s ease-in-out infinite,
    ${pulse} 2s ease-in-out infinite,
    ${sparkle} ${props => Math.random() * 2 + 1}s ease-in-out infinite;
  left: ${props => props.left}%;
  animation-delay: ${props => props.delay}s;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-radius: 50%;
    box-shadow: 0 0 10px ${props => props.color},
                0 0 20px rgba(255, 255, 255, 0.5),
                0 0 30px rgba(255, 255, 255, 0.3);
  }
  
  &:before {
    transform: translateX(-50%);
  }
  
  &:after {
    transform: translateY(-50%);
  }
  
  &:hover {
    filter: drop-shadow(0 0 15px ${props => props.color})
           brightness(1.5);
    transform: scale(1.2);
  }
`;

const FloatingHearts = ({ count = 15 }) => {
  const hearts = Array.from({ length: count }).map((_, i) => {
    const size = Math.random() * 20 + 10;
    const colors = [
      '#ff69b4', '#ffb6c1', '#ffc0cb', '#ff1493', '#db7093',
      'rgba(255, 105, 180, 0.9)', 'rgba(255, 20, 147, 0.9)',
      '#ff1493', '#ff69b4', '#ff8da1'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 15;
    const delay = Math.random() * 10;
    
    return (
      <Heart 
        key={i}
        size={size}
        color={color}
        left={left}
        duration={duration}
        delay={delay}
      />
    );
  });
  
  return <>{hearts}</>;
};

export default FloatingHearts;