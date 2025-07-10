import React from "react";
import { ReactComponent as TopMoversIcon } from "../../../assets/topMovers.svg";
import ViewMore from "components/shared/UI/viewMore";
import styles from './topMover.module.scss';
import { TOP_MOVERS } from "data/home/topMover";

const TopMovers = () => {
    console.log(TOP_MOVERS);
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '10px' }}>
                    <TopMoversIcon />
                    <p className={styles.title}>Top Movers</p>
                </div>
                <ViewMore />
            </div>
            <div>
                {TOP_MOVERS.map((item) => {
                    return (
                        <div key={item.id} className={styles.listContainer}>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px', width: '50%' }}>
                                <item.icon />
                                <p className={styles.itemTitle}>{item.title}</p>
                                <p className={styles.symbol}>{item.symbol}</p>
                            </div>
                            <p style={{width: '20%', textAlign: 'right'}}>{item.change}</p>
                            <p style={{width: '30%', textAlign: 'right'}}>{item.price}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default TopMovers;