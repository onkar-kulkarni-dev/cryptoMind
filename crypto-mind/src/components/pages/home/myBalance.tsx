import React from "react";
import styles from './myBalance.module.scss';
import { ReactComponent as MyBalanceIcon } from '../../../assets/myBalance.svg';
import { ReactComponent as FastActionIcon } from '../../../assets/fastAction.svg';
import ViewMore from "components/shared/UI/viewMore";
import { ReactComponent as DropDownWhiteIcon } from '../../../assets/dropdownWhite.svg'
import Button from "components/shared/UI/button";
import { ReactComponent as ReceiveIcon } from '../../../assets/receiveIcon.svg';
import { ReactComponent as SendIcon } from '../../../assets/sendIcon.svg';
import { ReactComponent as BlackDollarIcon } from '../../../assets/blackBorderedDollarIcon.svg'

const MyBalance = () => {

    const sendBtnStyles: React.CSSProperties = {
        backgroundColor: '#1A1A1A',
        color: 'white',
        cursor: 'pointer',
        height: '2.5rem',
        width: '50%',
        borderRadius: '32px',
        border: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px'
    };

    const receiveBtnStyles: React.CSSProperties = {
        backgroundColor: '#429EEF',
        color: 'white',
        cursor: 'pointer',
        height: '2.5rem',
        width: '50%',
        borderRadius: '32px',
        border: '1px solid white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px'
    };

    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <div className={styles.firstCard}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
                            <MyBalanceIcon />
                            <p className={styles.myBalancetext}>My Balance</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
                            <p className={styles.weekly}>Weekly<DropDownWhiteIcon /></p>
                            <ViewMore color={'white'} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                        <p className={styles.currentBalance}>$120.089</p>
                        <p className={styles.weekPoints}>+$250 this week</p>
                    </div>
                </div>
                <div className={styles.secondCard}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
                            <FastActionIcon />
                            <p className={styles.fastActionText}>Fast Action</p>
                        </div>
                        <div className={styles.infoBox}>
                            <BlackDollarIcon />
                            <div>
                                <p className={styles.payWith}>Pay with</p>
                                <p className={styles.usdWallet}>USD Wallet</p>
                            </div>
                            <p className={styles.walletPoints}>$7598.00</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', gap: '30px' }}>
                        <Button styles={sendBtnStyles} text={'Send'} icon={ReceiveIcon} />
                        <Button styles={receiveBtnStyles} text={'Receive'} icon={SendIcon} />
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <p>Uniswap Analyics</p>
                    
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default MyBalance;