import React from 'react';
import styled from 'styled-components';
import Circles from './Circles';

function AndroidUpgradeView({ progress, className }) {
  return (
    <div className={className}>
      <div className="content">
        <div className="logo">
          <div className="logo-containter">
            <Circles />
          </div>
        </div>
        <span>Installing system update</span>
        <div className="progress">
          <div className="progress-bar">
            <div className="bar" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default styled(AndroidUpgradeView)`
  height: 100%;
  background: #000000;
  color: #fff;
  font-weight:bold;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans TC', sans-serif, 'Segoe UI light', Arial;
  word-break: break-word;
  cursor: none;
  
  .logo {
    height: 200px;
    margin: 20px 0 45px 0;
  }

  .logo-containter {
    width: 180px;
    height: 200px;
  }  

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .progress {
    margin-top: 7px;
  }

  .progress-bar {
    height: 3px;
    width: 100px;
    margin-top: 15px;
    margin-bottom: 30px;
    background: #a5a9ac;
    position: relative;
    overflow: hidden;
    border-radius: 3px;
  }
  .bar {
    position: absolute;
    width: 0;
    height: 100%;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;    
    background: rgba(240, 240, 240, 0.9);
  }
`;
