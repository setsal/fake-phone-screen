import SamsungUpgrade from './SamsungUpgrade';
import IOSUpgrade from './IOSUpgrade';
import IOSUpgradeWhite from './IOSUpgradeWhite';
import AUpreview from '../assets/android-upgrade-preview.png';
import IOSpreview from '../assets/ios-upgrade.png';
import IOSpreviewWhite from '../assets/ios-upgrade-white.png';

const themes = [
  {
    id: 1,
    displayName: 'Samsung Upgrade',
    name: 'SamsungUpgrade',
    imgUrl: AUpreview,
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
];

export default themes;

export {
  SamsungUpgrade,
  IOSUpgrade,
  IOSUpgradeWhite,
};
