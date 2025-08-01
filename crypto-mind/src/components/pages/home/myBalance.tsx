import React from "react";
import styles from './myBalance.module.scss';

const MyBalance = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <div className={styles.firstCard}>
                    a
                </div>
                <div style={{ backgroundColor: 'white', borderRadius: '16px', width: '50%', height: '150px', borderWidth: '1px', borderStyle: 'solid', borderColor: 'black' }}>
                    b
                </div>
            </div>
        </div>
    )
}

export default MyBalance;