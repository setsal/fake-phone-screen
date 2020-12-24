import React, { useState, useEffect } from 'react';
import IOSUpgradeView from './IOSUpgradeView';

export function getRandomTime() {
  return Math.random() * 5000 + 5000;
}

function IOSUpgrade({ randomFn }) {
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
  return <IOSUpgradeView progress={progress} />;
}

IOSUpgrade.defaultProps = {
  randomFn: getRandomTime,
};

export default IOSUpgrade;
