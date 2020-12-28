import SamsungUpgrade from './SamsungUpgrade';
import IOSUpgrade from './IOSUpgrade';
import IOSUpgradeWhite from './IOSUpgradeWhite';
import AndroidUpgrade from './AndroidUpgrade';
import SamsungPreview from '../assets/samsung-upgrade-preview.png';
import IOSpreview from '../assets/ios-upgrade.png';
import IOSpreviewWhite from '../assets/ios-upgrade-white.png';
import AndroidPreview from '../assets/android-upgrade-preview.png';

const themes = [
  {
    id: 1,
    displayName: 'Samsung Upgrade',
    name: 'SamsungUpgrade',
    imgUrl: SamsungPreview,
    component: SamsungUpgrade,
  },
  {
    id: 2,
    displayName: 'IOS Upgrade',
    name: 'IOSUpgrade',
    imgUrl: IOSpreview,
    component: IOSUpgrade,
  },
  {
    id: 3,
    displayName: 'IOS Upgrade White',
    name: 'IOSUpgradeWhite',
    imgUrl: IOSpreviewWhite,
    component: IOSUpgradeWhite,
  },
  {
    id: 4,
    displayName: 'Android Upgrade (Pixel & Nexus)',
    name: 'AndroidUpgrade',
    imgUrl: AndroidPreview,
    component: AndroidUpgrade,
  },
];

export default themes;

export {
  SamsungUpgrade,
  IOSUpgrade,
  IOSUpgradeWhite,
};
