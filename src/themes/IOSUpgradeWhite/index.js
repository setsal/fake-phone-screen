import React, { useState, useEffect } from 'react';
import IOSUpgradeWhiteView from './IOSUpgradeWhite';

export function getRandomTime() {
  return Math.random() * 5000 + 5000;
}

function IOSUpgradeWhite({ randomFn }) {
  const [progress, setProgress] = useState(0);
  useEffect(
    () => {
      const timer = setTimeout(() => {
        setProgress((progress) => progress + 1);
      }, randomFn());
      return () => {
        clearTimeout(timer);
      };
    },
    [progress, randomFn],
  );
  return <IOSUpgradeWhiteView progress={progress} />;
}

IOSUpgradeWhite.defaultProps = {
  randomFn: getRandomTime,
};

export default IOSUpgradeWhite;
