import React from 'react';
import styled from 'styled-components';
import ArrowCircle from './ArrowCircle';
import androidLogo from '../../assets/android-logo.svg';

function SamsungUpgradeView({ progress, className }) {
  return (
    <div className={className}>
      <div className="content">
        <div className="logo">
          <div className="logo-containter">
            <ArrowCircle />
          </div>
        </div>
        <div className="messages">
          <span>Installing system update</span>
          <div>
            <span id="progress" className="progress">{progress}</span>
            ﹪
            <div className="progress-bar">
              <div className="bar" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default styled(SamsungUpgradeView)`
  height: 100%;
  background: #01a1ff;
  color: #fff;
  font-weight:bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans TC', sans-serif, 'Segoe UI light', Arial;
  word-break: break-word;
  cursor: none;

  .logo {
    height: 120px;
    margin: 120px 0 120px 0;
  }

  .logo-containter {
    width: 120px;
    height: 120px;
    background: url(${androidLogo}) no-repeat;
    background-size: 120px 120px;
  }  

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .messages {
    margin-top: 30px;
    & > * {
      margin-bottom: 3px;
    }
  }

  .progress {
    margin-right: 3px;
    font-size: 1.8em;
  }

  .progress-bar {
    height: 6px;
    width: 320px;
    margin-top: 10px;
    margin-bottom: 30px;
    background: #76c1fc;
    position: relative;
    overflow: hidden;
  }
  
  .bar {
    position: absolute;
    width: 0;
    height: 100%;
    background: rgba(240, 240, 240, 0.9);
  }
`;
