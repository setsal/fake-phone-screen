import React from 'react';
import styled from 'styled-components';
import arrowCircleSVG from '../../assets/circle.svg';

function ArrowCircle({ className }) {
  return (
    <div className={className}>
      <img className="circle" src={arrowCircleSVG} alt="circle" />
    </div>
  );
}

export default styled(ArrowCircle)`
  width: 40px;
  height: 40px;
  position: relative;
  padding-top: 44px;
  margin:0 auto;
  .circle {
    position: absolute;
    width: 100%;
    height: 100%;
    animation: spin 4s infinite;
    animation-timing-function: linear;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
