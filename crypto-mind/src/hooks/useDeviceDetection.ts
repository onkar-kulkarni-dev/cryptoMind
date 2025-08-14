import React, { useState, useEffect } from 'react';

const useDeviceDetection = () => {
    const [deviceType, setDeviceType] = useState('');

    useEffect(() => {
        const mobileQuery = window.matchMedia('(max-width: 767px)');
        const tabletQuery = window.matchMedia('(max-width: 1024px)');
        const smallScreen = window.matchMedia('(max-width: 1200px)');

        const checkDevice = () => {
            const userAgent = navigator.userAgent.toLowerCase();

            // Check for mobile
            if (mobileQuery.matches && /mobile/i.test(userAgent)) {
                setDeviceType('Mobile');
            }
            // Check for tablet
            else if ((tabletQuery.matches && /tablet|ipad/i.test(userAgent)) || smallScreen.matches) {
                setDeviceType('Tablet');
            }
            // If no match, assume desktop
            else {
                setDeviceType('Desktop');
            }
        };

        checkDevice();

        mobileQuery.addListener(checkDevice);
        tabletQuery.addListener(checkDevice);

        return () => {
            mobileQuery.removeListener(checkDevice);
            tabletQuery.removeListener(checkDevice);
        };
    }, []);

    return deviceType;
};

export default useDeviceDetection;
