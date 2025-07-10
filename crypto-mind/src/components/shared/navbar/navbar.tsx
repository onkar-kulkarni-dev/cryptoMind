import React from "react";
import { ReactComponent as CryptoMindLogo } from "../../../assets/crypto-mind-logo.svg";
import styles from './navbar.module.scss';
import { NAVBAR_ITEMS } from "data/navbar/navbarItems";
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={styles.container}>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '10px', cursor: 'pointer' }} onClick={() => navigate('/')}>
                <CryptoMindLogo />
                <p className={styles.logoText}>CryptoMind</p>
            </div>
            <ul style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '25px', listStyleType: 'none', cursor: 'pointer' }}>
                {NAVBAR_ITEMS.map((item) => (
                    <li key={item.id} className={location.pathname == item.path ? styles.trapezoid : styles.navbarItem}>
                        <a href={item.path} style={location.pathname == item.path ? { transform: 'translateY(110%)' } : {}} className={styles.navbarLink}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Navbar;