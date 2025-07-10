import React from "react";
import { ReactComponent as CryptoMindLogo } from "../../../assets/crypto-mind-logo.svg";
import styles from './navbar.module.scss';
import { NAVBAR_ITEMS } from "data/navbar/navbarItems";
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';
import Toggle from "../UI/toggle";
import SearchBox from "../UI/searchBox";
import SearchIcon from '../../../assets/searchIcon.svg';
import { ReactComponent as NotificationsIcon } from '../../../assets/notificationIcon.svg';
import { ReactComponent as MaleAvatar } from '../../../assets/avatars/male.svg';
import { ReactComponent as DownDropDownIcon } from '../../../assets/downDropDownIcon.svg';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className={styles.container}>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '10px', cursor: 'pointer' }} onClick={() => navigate('/')}>
                <CryptoMindLogo />
                <p className={styles.logoText}>CryptoMind</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '30px', }}>
                <ul style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '25px', listStyleType: 'none', cursor: 'pointer' }}>
                    {NAVBAR_ITEMS.map((item) => (
                        <li key={item.id} className={location.pathname == item.path ? styles.trapezoid : styles.navbarItem}>
                            <a href={item.path} style={location.pathname == item.path ? { transform: 'translateY(110%)' } : {}} className={styles.navbarLink}>
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <Toggle />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '10px' }}>
                <SearchBox type={'text'} placeHolder={'Search for assets'} icon={SearchIcon} />
                <button className={styles.buySellButton} onClick={() => navigate('/buy-sell')}>
                    Buy & Sell
                </button>
                <div className={styles.notificationIcon}>
                    <div className={styles.badge}>7</div>
                    <NotificationsIcon />
                </div>
                <div className={styles.myProfile}>
                    <MaleAvatar />
                    <DownDropDownIcon />
                </div>
            </div>
        </div>
    )
}
export default Navbar;