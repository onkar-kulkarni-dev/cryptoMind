import React from "react";
import styles from './myPortfolio.module.scss';
import { ReactComponent as MyPortfolioIcon } from "../../../assets/myPortfolio.svg";
import ViewMore from "components/shared/UI/viewMore";
import { MY_PORTFOLIO } from "../../../data/home/myPortfolio";

const MyPortfolio = () => {
    return (
        <div className={styles.container}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                    <MyPortfolioIcon />
                    <p className={styles.title}>My Portfolio</p>
                </div>
                <ViewMore color={'black'} />
            </div>
            {/* <div>
                <table>
                    <thead>
                        <tr>
                            <th>Asset</th>
                            <th>Balance</th>
                            <th>7 Days market</th>
                            <th>24H Change</th>
                            <th>Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {MY_PORTFOLIO.map((item) => (
                            <tr key={item.id}>
                                <td style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <item.icon />
                                    <span>{item.symbol}</span>
                                </td>
                                <td>${item.value.toFixed(2)}</td>
                                <td>NA</td>
                                <td style={{ color: item.change.includes('+') ? 'green' : 'red' }}>{item.change}%</td>
                                <td>${item.balance.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div> */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', padding: '0px 15px', alignItems: 'center' }}>
                    <span>Asset</span>
                    <span>Balance</span>
                    <span>7 Days Market</span>
                    <span>24H Change</span>
                    <span>Value</span>
                </div>

                {MY_PORTFOLIO.map((item) => (
                    <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 15px', gap: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '15%' }}>
                            <item.icon />
                            <span>{item.symbol}</span>
                        </div>
                        <p style={{ width: '20%', textAlign: 'center' }}>${item.value.toFixed(2)}</p>
                        <p style={{ width: '30%', textAlign: 'center' }}>NA</p>
                        <p style={{ color: item.change.includes('+') ? 'green' : 'red', width: '15%', textAlign: 'center' }}>{item.change}%</p>
                        <p style={{ width: '20%', textAlign: 'end' }}>${item.balance.toFixed(2)}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default MyPortfolio;