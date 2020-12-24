import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap, TimelineMax, Power4 } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import Logo from '../../assets/logo.png';

gsap.registerPlugin(CSSPlugin);

function Usage({ className }) {
  const [state, setState] = useState({
    clicked: null,
  });

  // refs for our DOM elements
  const innerContainer = useRef(null);
  const menu = useRef(null);
  const openTrigger = useRef(null);
  const menuTriggerBarTopRef = useRef(null);
  const menuTriggerBarMidRef = useRef(null);
  const menuTriggerBarBtmRef = useRef(null);

  const closeTrigger = useRef(null);
  const closeTriggerLeft = useRef(null);
  const closeTriggerRight = useRef(null);

  const menuBgTop = useRef(null);
  const menuBgMid = useRef(null);
  const menuBgBtm = useRef(null);

  const [tlOpen] = useState(new TimelineMax({ paused: true }));
  const [tlClose] = useState(new TimelineMax({ paused: true }));

  // setting animation
  useEffect(() => {
    // timeline open
    tlOpen.add('preOpen')
      .to(menuTriggerBarTopRef.current, {
        duration: 0.4,
        x: '+=80px',
        y: '-=80px',
        delay: 0.1,
        ease: Power4.easeIn,
        onComplete: () => {
          closeTrigger.current.style.zIndex = 40;
          innerContainer.current.style.zIndex = 35;
        },
      }, 'preOpen')
      .to(menuTriggerBarMidRef.current, {
        duration: 0.4,
        x: '+=80px',
        y: '-=80px',
        ease: Power4.easeIn,
        onComplete: () => {
          openTrigger.current.style.visibility = 'hidden';
        },
      }, 'preOpen')
      .to(menuTriggerBarBtmRef.current, {
        duration: 0.4,
        x: '+=80px',
        y: '-=80px',
        delay: 0.2,
        ease: Power4.easeIn,
      }, 'preOpen')
      .add('open', '-=0.4')
      .to(menuBgTop.current, {
        duration: 0.8,
        y: '13%',
        ease: Power4.easeInOut,
      }, 'open')
      .to(menuBgMid.current, {
        duration: 0.8,
        scaleY: 1,
        ease: Power4.easeInOut,
      }, 'open')
      .to(menuBgBtm.current, {
        duration: 0.8,
        y: '-114%',
        ease: Power4.easeInOut,
      }, 'open')
      .fromTo(menu.current, {
        duration: 0.6,
        y: 30,
        opacity: 0,
        visibility: 'hidden',
      }, {
        y: 0,
        opacity: 1,
        visibility: 'visible',
        ease: Power4.easeOut,
      }, '-=0.2')
      .add('preClose', '-=0.8')
      .to(closeTriggerLeft.current, {
        duration: 0.8,
        x: '-=100px',
        y: '+=100px',
        ease: Power4.easeOut,
      }, 'preClose')
      .to(closeTriggerRight.current, {
        duration: 0.8,
        x: '+=100px',
        y: '+=100px',
        delay: 0.2,
        ease: Power4.easeOut,
      }, 'preClose');

    // timeline close
    tlClose.add('close')
      .to(menuBgTop.current, {
        duration: 0.2,
        backgroundColor: '#6295ca',
        ease: Power4.easeInOut,
        onComplete: () => {
          closeTrigger.current.style.zIndex = 5;
          innerContainer.current.style.zIndex = 20;
          openTrigger.current.style.visibility = 'visible';
        },
      }, 'close')
      .to(menuBgMid.current, {
        duration: 0.2,
        backgroundColor: '#6295ca',
        ease: Power4.easeInOut,
      }, 'close')
      .to(menuBgBtm.current, {
        duration: 0.2,
        backgroundColor: '#6295ca',
        ease: Power4.easeInOut,
      }, 'close')
      .to(menu.current, {
        duration: 0.6,
        y: 20,
        opacity: 0,
        ease: Power4.easeOut,
        onComplete: () => {
          menu.current.style.visibility = 'hidden';
        },
      }, 'close')
      .to(menuBgTop.current, {
        duration: 0.8,
        y: '-113%',
        ease: Power4.easeInOut,
      }, 'close', '+=0.2')
      .to(menuBgMid.current, {
        duration: 0.8,
        scaleY: 0,
        ease: Power4.easeInOut,
      }, 'close', '+=0.2')
      .to(menuBgBtm.current, {
        duration: 0.8,
        y: '23%',
        ease: Power4.easeInOut,
        onComplete: () => {
          menuBgTop.current.style.backgroundColor = '#ffffff';
          menuBgMid.current.style.backgroundColor = '#ffffff';
          menuBgBtm.current.style.backgroundColor = '#ffffff';
        },
      }, 'close', '+=0.2')
      .to(closeTriggerLeft.current, {
        duration: 0.2,
        x: '+=100px',
        y: '-=100px',
        ease: Power4.easeIn,
      }, 'close')
      .to(closeTriggerRight.current, {
        duration: 0.2,
        x: '-=100px',
        y: '-=100px',
        delay: 0.1,
        ease: Power4.easeIn,
      }, 'close')
      .to(menuTriggerBarTopRef.current, {
        duration: 1,
        x: '-=80px',
        y: '+=80px',
        delay: 0.2,
        ease: Power4.easeOut,
      }, 'close')
      .to(menuTriggerBarMidRef.current, {
        duration: 1,
        x: '-=80px',
        y: '+=80px',
        ease: Power4.easeOut,
      }, 'close')
      .to(menuTriggerBarBtmRef.current, {
        duration: 1,
        x: '-=80px',
        y: '+=80px',
        delay: 0.1,
        ease: Power4.easeOut,
      }, 'close');
  }, [tlOpen, tlClose]);

  useEffect(() => {
    if (state.clicked === false) {
      if (tlClose.progress() < 1) {
        tlClose.play();
      } else {
        tlClose.restart();
      }
    } else if (state.clicked === true) {
      if (tlOpen.progress() < 1) {
        tlOpen.play();
      } else {
        tlOpen.restart();
      }
    }
  }, [state, tlOpen, tlClose]);

  function handleOpenClick(e) {
    e.preventDefault();
    setState({
      clicked: true,
    });
  }

  function handleCloseClick(e) {
    e.preventDefault();
    setState({
      clicked: false,
    });
  }

  return (
    <div className={className}>
      <div className="navigation">
        <span role="button" ref={openTrigger} id="menu-trigger" className="menu-trigger" onClick={handleOpenClick} onKeyDown={handleOpenClick} tabIndex={0}>
          <i ref={menuTriggerBarTopRef} className="menu-trigger-bar top" />
          <i ref={menuTriggerBarMidRef} className="menu-trigger-bar middle" />
          <i ref={menuTriggerBarBtmRef} className="menu-trigger-bar bottom" />
        </span>
        <span role="button" ref={closeTrigger} id="close-trigger" className="close-trigger" onClick={handleCloseClick} onKeyDown={handleCloseClick} tabIndex={0}>
          <i ref={closeTriggerLeft} className="close-trigger-bar left" />
          <i ref={closeTriggerRight} className="close-trigger-bar right" />
        </span>
      </div>
      <div ref={innerContainer} className="inner-container">
        <i ref={menuBgTop} className="menu-bg top" />
        <i ref={menuBgMid} className="menu-bg middle" />
        <i ref={menuBgBtm} className="menu-bg bottom" />
        <div className="menu-container">
          <ul ref={menu} id="menu" className="menu">
            <li style={{ paddingBottom: '30px' }}>
              <img src={Logo} style={{ width: '216px' }} alt="logo" />
            </li>
            <li>
              <a href="https://github.com/setsal/fake-phone-screen" rel="noreferrer" target="_blank">➢ Github Repo</a>
            </li>
            <li>
              <a href="https://github.com/setsal/fake-phone-screen#pwa-mobile-installation-guide" rel="noreferrer" target="_blank">➢ Mobile PWA installation guide</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default styled(Usage)`
  .menu-trigger, .close-trigger {
    position: absolute;
    top: 32px;
    right: 20px;
    display: block;
    width: 42px;
    height: 42px;
    cursor: pointer;
    z-index: 333;
    &:hover {
      .menu-trigger-bar {
        &:before {
          width: 100%;
        }
      }
      .close-trigger-bar {
        &:before {
          width: 100%;
        }
      }
    }
  }
  
  .close-trigger {
    z-index: 5;
    top: 42px;
  }
  
  .menu-trigger-bar {
    display: block;
    width: 100%;
    height: 4px;
    background-color: rgba(255,255,255,1);
    margin-bottom: 6px;
    transform: rotate(-45deg);
    position: relative;
    
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 0%;
      height: 100%;
      background-color: rgba(0,0,0,0.1);
      transition: all 0.3s cubic-bezier(.55,0,.1,1);
    }
    
    &.top {
      width: 50%;
    }
    &.middle {
      &:before {
        left: auto;
        right: 0;
      }
    }
    &.bottom {
      width: 50%;
      margin-left: 50%;
    }
  }
  
  .close-trigger-bar {
    display: block;
    width: 100%;
    height: 4px;
    background-color: #222222;
    position: relative;
    
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 0%;
      height: 100%;
      background-color: rgba(255,255,255,0.2);
      transition: all 0.3s cubic-bezier(.55,0,.1,1);
    }

    &.left {
      transform: translateX(100px) translateY(-100px) rotate(-45deg);
    }
    &.right {
      transform: translateX(-100px) translateY(-100px) rotate(45deg);
      top: -3px;
    }
  }
  
  .inner-container, .menu-container {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
  }
  
  .inner-container {
    z-index: 20;
  }
  .menu-container {
    display: flex;
    align-items: center;
  }
  .menu {
    display: block;
    width: 100%;
    padding: 20%;
    
    li {
      text-align: center;
      display: block;
      padding: 0px 0;
    }
    
    a {
      text-decoration: none;
      color: #222222;
      display: inline-block;
      padding: 10px 0;
      position: relative;
      
      &:hover {
        &:before {
          opacity: 1;
          transform: translateX(0px);
        }
      }
      
      &:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 18px;
        height: 4px;
        opacity: 0;
        background-color: #222222;
        transform: translateX(100px);
        transition: all 0.3s cubic-bezier(.55,0,.1,1);
      }
    }
  }
  
  .menu-bg {
    width: 250%;
    left: -53%;
    top: -25%;
    position: absolute;
    display: block;
    background-color: rgba(255,255,255,1);
    &.middle {
        top: 13%;
        left: -65%;
        transform: rotate(-45deg) scaleY(0);
      }
      &.top {
        transform: rotate(-45deg) translateY(-152%);
      }
      &.bottom {
        transform: rotate(-45deg) translateY(25%);
      }    
  }

  @media only screen and (min-width: 200px) {
    .menu-bg {
      height: 50%;
      &.middle {
        top: 13%;
        left: -65%;
      }
      &.top {
        left: -50%;
        top: 0;
      }
      &.bottom {
        top: 105%;
        left: -30%;
      }
    }
  }

  @media only screen and (min-width: 576px) {
    .menu-bg {
      height: 70%;
      &.top {
        left: -58%;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .menu-bg {
      height: 80%;
      &.top {
        left: -75%;
      }
    }
  }

  @media only screen and (min-width: 992px) {
    .menu-bg {
      height: 150%;
      &.top {
        left: -40%;
      }
    }
  }
  @media only screen and (min-width: 1200px) {
    .menu-bg {
      height: 200%;
      &.top {
        left: -50%;
      }
    }
  }       
`;
