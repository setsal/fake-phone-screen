import React from 'react';
import styled from 'styled-components';
import AppleLogo from '../../assets/apple-black.svg';

function IOSUpgradeWhiteView({ progress, className }) {
  return (
    <div className={className}>
      <div className="content">
        <div className="logo">
          <div className="logo-containter" />
        </div>
        <div className="progress-bar">
          <div className="bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

export default styled(IOSUpgradeWhiteView)`
  height: 100%;
  background: rgb(255, 255, 255);
  color: #fff;
  font-weight:bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans TC', sans-serif, 'Segoe UI light', Arial;
  word-break: break-word;
  padding: 10px;
  .logo {
    height: 50px;
    margin: 50px 0 40px 0;
  }
  .logo-containter {
    width: 70px;
    height: 70px;
    background: url(${AppleLogo}) no-repeat;
    background-size: 70px 70px;
  }  
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .progress-bar {
    border-radius: 5px;
    height: 3px;
    width: 230px;
    margin-top: 10px;
    margin-bottom: 30px;
    background: #bcbcbc;
    position: relative;
    overflow: hidden;
  }
  .bar {
    position: absolute;
    width: 0;
    height: 100%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;        
    background: #575558;
  }
`;
