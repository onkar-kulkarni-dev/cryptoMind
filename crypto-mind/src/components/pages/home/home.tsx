import React from "react";
import CryptoMindAISection from "./CryptoMindAISection";
import styles from './home.module.scss';
import TopMovers from "./topMovers";

const Home = () => {
    return (
        <div>
            <TopMovers />
            <CryptoMindAISection />
        </div>
    )
}

export default Home