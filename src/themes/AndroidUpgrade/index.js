import React, { useState, useEffect } from 'react';
import AndroidUpgradeView from './AndroidUpgradeView';

export function getRandomTime() {
  return Math.random() * 5000 + 5000;
}

function AndroidUpgrade({ randomFn }) {
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
  return <AndroidUpgradeView progress={progress} />;
}

AndroidUpgrade.defaultProps = {
  randomFn: getRandomTime,
};

export default AndroidUpgrade;
