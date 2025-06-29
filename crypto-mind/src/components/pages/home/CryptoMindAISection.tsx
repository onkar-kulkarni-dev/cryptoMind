import React from "react";
import styles from './cryptoMindAISection.module.scss';
import CryptoMindWhiteIcon from '../../../assets/cryptoMind_white.svg'
import InputBox from "components/shared/UI/input";
import SearchAIIcon from '../../../assets/ai_search.svg';
import Toggle from "components/shared/UI/toggle";
import { ReactComponent as AIMarketPredictor } from '../../../assets/ai_market_predictor.svg';
import { ReactComponent as AIPortfolioOptimizer } from '../../../assets/ai_portfoli_optimizer.svg';

const CryptoMindAISection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img src={CryptoMindWhiteIcon} alt="" />
                <header className={styles.title}>CryptoMind AI</header>
            </div>
            <div className={styles.boxContainer}>
                <section className={styles.section}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', gap: '20px' }}>
                        <AIMarketPredictor style={{ width: '3.5rem', height: '3.5rem' }} />
                        <p style={{fontWeight: '500'}}>AI Market Predictor</p>
                    </div>
                    <p style={{ padding: '0 20px', fontSize: '14px', color: 'var(--grey)' }}>Analyze crypto market data in real-time, including trading volume.</p>
                </section>
                <section className={styles.section}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', gap: '20px' }}>
                        <AIPortfolioOptimizer style={{ width: '3.5rem', height: '3.5rem' }} />
                        <p style={{fontWeight: '500'}}>AI Portfolio Optimizer</p>
                    </div>
                    <p style={{ padding: '0 20px', fontSize: '14px', color: 'var(--grey)' }}>Investment objectives to recommended optimal asset allocation settings.</p>
                </section>
            </div>
            <div className={styles.boxContainer}>
                <InputBox type={'text'} icon={SearchAIIcon} placeHolder={'Search with AI'} />
                <Toggle />
            </div>
        </div>
    )
}

export default CryptoMindAISection