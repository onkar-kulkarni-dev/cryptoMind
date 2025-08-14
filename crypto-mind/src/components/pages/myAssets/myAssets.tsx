import React from "react";
import styles from './myAssets.module.scss';
import { ReactComponent as RobotIcon } from "../../../assets/robot.svg";
import { ReactComponent as TopMoversIcon } from "../../../assets/topMovers.svg";
import ViewMore from "components/shared/UI/viewMore";
import { ReactComponent as FastActionIcon } from "../../../assets/fastAction.svg";
import { ReactComponent as BlackDollarIcon } from '../../../assets/blackBorderedDollarIcon.svg';
import Button from "components/shared/UI/button";
import { ReactComponent as SwitchIcon } from '../../../assets/switch.svg'

const MyAssets: React.FC = () => {

    const btnStyles = {
        backgroundColor: 'var(--black)',
        color: 'var(--white)',
        cursor: 'pointer',
        height: '3.5rem',
        width: '100%',
        borderRadius: '32px',
        border: '1px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        marginTop: '30px',
        fontSize: '16px'
    }

    return (
        <div className={styles.container}>
            <div className={styles.firstColumn}>
                <div className={styles.firstColumnFirstRow}>
                    a
                </div>
                <div className={styles.firstColumnSecondRow}>
                    b
                </div>
            </div>
            <div className={styles.secondColumn}>
                <div className={styles.secondColumnFirstRow}>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '10px' }}>
                            <TopMoversIcon />
                            <p className={styles.bestToBuyTitle}>Best to buy</p>
                        </div>
                        <ViewMore color={'var(borderGrey)'} type="dot"/>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px' }}>
                        <p className={styles.currentBalance}>$120.089</p>
                        <p className={styles.weekPoints}><span className={styles.blc}>+$250</span> this week</p>
                    </div>
                    {/* graph here */}
                </div>
                <div className={styles.secondColumnSecondRow}>
                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '10px' }}>
                            <FastActionIcon />
                            <p className={styles.bestToBuyTitle}>Fast Action</p>
                        </div>
                        <ViewMore color={'var(borderGrey)'} type="arrow"/>
                    </div>
                    <div className={styles.payWithContainer} style={{ marginTop: '30px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '10px' }}>
                            <BlackDollarIcon />
                            <div>
                                <p className={styles.payWith}>Pay with</p>
                                <p className={styles.usdWallet}>USD Wallet</p>
                            </div>
                        </div>
                        <p className={styles.walletPoints}>$7598.00</p>
                    </div>
                    <div className={styles.receiveGiveContainer} style={{ marginTop: '20px' }}>
                        <div className={styles.receiveGive}>
                            <p className={styles.receiveGiveTitle}>Receive</p>
                            <p className={styles.receiveGivBlc}>1,75 BTC</p>
                        </div>
                        <SwitchIcon style={{alignSelf: 'center'}}/>
                        <div className={styles.receiveGive}>
                            <p className={styles.receiveGiveTitle}>Give</p>
                            <p className={styles.receiveGivBlc}>57 580, 80 USD</p>
                        </div>
                    </div>
                    <Button text={'Confirm'} icon={undefined} styles={btnStyles} />
                </div>
                <div className={styles.secondColumnThirdRow}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <p className={styles.tradeSmarter}>Trade smarter with CryptoMind AI</p>
                        <p className={styles.automatetrades}>Automate trades based on user-defined criteria, using AI algorithms.</p>
                        <button className={styles.tryNowBtn}>
                            Try Now
                        </button>
                    </div>
                    <RobotIcon style={{ height: '350px', width: '350px' }} />
                </div>
            </div>
        </div>
    )
}

export default MyAssets;