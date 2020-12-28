import React from 'react';
import styled from 'styled-components';

function Circles({ className }) {
  return (
    <div className={className}>
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
    </div>
  );
}

export default styled(Circles)`
  width: 180px;
  height: 180px;
  position: relative;
  margin:0 auto;
  top: 50%;
  left: 50%;  
  transform: translate3D(-50%, -50%, 0);
  opacity: 0.96;

  .circle {
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 10px solid transparent;
    border-radius: 115% 140% 145% 110% / 125% 140% 110% 125%;
    transform-origin: 50% 50%;
    mix-blend-mode: screen;

    /* red children */    
    &:nth-child(1) {
        border-color: #be4e39;
        animation: spin1 5.5s linear infinite;
    }

    /* yellow children */
    &:nth-child(2) {
        border-color: #f5eb4c;
        animation: spin2 5.5s linear infinite;
    }

    /* red children */
    &:nth-child(3) {
        border-color: #85e5eb;
        animation: spin3 5.5s linear infinite;
    }

    /* green children */
    &:nth-child(4) {
        border-color: #549753;
        animation: spin4 5.5s linear infinite;
    }
  }



  @keyframes spin1 {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
  }

  @keyframes spin2 {
      0% {
          transform: rotate(72deg);
      }
      100% {
          transform: rotate(-288deg);
      }
  }

  @keyframes spin3 {
      0% {
          transform: rotate(-144deg);
      }
      100% {
          transform: rotate(216deg);
      }
  }

  @keyframes spin4 {
      0% {
          transform: rotate(216deg);
      }
      100% {
          transform: rotate(-144deg);
      }
  }
}  
`;
