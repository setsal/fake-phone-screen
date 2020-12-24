import React, { useState, useEffect } from 'react';
import SamsungUpgradeView from './SamsungUpgradeView';

export function getRandomTime() {
  return Math.random() * 5000 + 5000;
}

function SamsungUpgrade({ randomFn }) {
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
  return <SamsungUpgradeView progress={progress} />;
}

SamsungUpgrade.defaultProps = {
  randomFn: getRandomTime,
};

export default SamsungUpgrade;
