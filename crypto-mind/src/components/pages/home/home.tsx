import React from "react";
import CryptoMindAISection from "./CryptoMindAISection";
import styles from './home.module.scss';
import TopMovers from "./topMovers";
import MyBalance from "./myBalance";
import MyPortfolio from "./myPortfolio";

const Home = () => {
    return (
        <div style={{ width: '100%', display: 'grid', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <MyBalance />
                <TopMovers />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                <MyPortfolio />
                <CryptoMindAISection />
            </div>


        </div>
    )
}

export default Home