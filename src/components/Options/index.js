import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import themes from '../../themes';
import Option from './Option';
import ScrollTop from './ScrollTop';
import LogoWhite from '../../assets/logo-white.png';
import Usage from './Usage';

function Options({ className }) {
  const [nearTop, setNearTop] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      setNearTop(window.pageYOffset < 150);
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  function onScrollTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={className}>
      <div className="container">
        <header>
          <img src={LogoWhite} style={{ width: '216px' }} alt="LogoWhite" />
        </header>
        <div className="grid">
          {themes.map(({ id, name, ...rest }) => (
            <Link
              className="area"
              key={id}
              to={{ pathname: `/${name}` }}
            >
              <Option name={name} {...rest} />
            </Link>
          ))}
        </div>
        <Usage />
      </div>
      <ScrollTop onClick={onScrollTop} show={!nearTop} />
    </div>
  );
}

export default styled(Options)`
  height: 100%;
  position: relative;
  width: 100%;
  .container {
    background-color: #242422;
    min-height: 100%;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    -webkit-box-shadow: 0px 9px 13px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 0px 9px 13px 0px rgba(0,0,0,0.3);
    box-shadow: 0px 9px 13px 0px rgba(0,0,0,0.3);
    -webkit-transform: scale(1);    
  }

  header {
    z-index: 30;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    filter: drop-shadow(rgba(164, 164, 164, 0.8) 1px 1px 1.5px);
  }

  .grid {
    z-index: 30;
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fill, 288px);
    grid-auto-rows: 162px;
    grid-gap: 40px 40px;
    justify-content: center;
    padding: 0 40px 60px;
  }

  .area {
    position: relative;
    width: 100%;
    height: 100%;
  }    
`;
