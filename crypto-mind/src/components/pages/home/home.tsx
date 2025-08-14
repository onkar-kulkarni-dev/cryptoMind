import React from "react";
import CryptoMindAISection from "./CryptoMindAISection";
import styles from './home.module.scss';
import TopMovers from "./topMovers";
import MyBalance from "./myBalance";
import MyPortfolio from "./myPortfolio";
import useDeviceDetection from "hooks/useDeviceDetection";

const Home = () => {
    const deviceType = useDeviceDetection();
    return (
        <div className={styles.homeContainer}>
            {deviceType == "Desktop" ? <>
                <div className={styles.topSection}>
                    <MyBalance />
                    <TopMovers />
                </div>
                <div className={styles.bottomSection}>
                    <MyPortfolio />
                    <CryptoMindAISection />
                </div>
            </> : <>
                <div className={styles.smallTopSection}>
                    <MyBalance />
                    <MyPortfolio />
                </div>
                <div className={styles.smallTBottomSection}>
                    <TopMovers />
                    <CryptoMindAISection />
                </div>
            </>}
        </div>
    )
}

export default Home