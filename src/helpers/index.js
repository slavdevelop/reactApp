import Constants from './constants';

export { default as Constants } from './constants';

export const getPlatformType = () => {
    const { clientWidth } = document.documentElement;

    if(clientWidth < 750) {
        return Constants.PlatformTypes.MOBILE
    }
    if (clientWidth < 960) {
        return Constants.PlatformTypes.TABLET;
    }

    return Constants.PlatformTypes.DESKTOP;
};