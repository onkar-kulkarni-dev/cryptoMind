import React, { useState } from "react";
import styles from './toggle.module.scss';
import { ReactComponent as StarIcon } from '../../../assets/star_icon.svg';

const Toggle = () => {

    const [isAISelected, setIsAISelected] = useState(true);

    return (
        <div className={styles.container}>
            <button style={{ color: isAISelected ? 'white' : 'black' }} className={isAISelected ? styles.selectedBtn : styles.btn} onClick={() => setIsAISelected(true)}>{'\u00A0AI\u00A0'}</button>
            <button className={!isAISelected ? styles.selectedBtn : styles.btn} onClick={() => setIsAISelected(false)}><StarIcon style={{
                color: !isAISelected ? 'var(--white)' : 'var(--primaryBlue)',
            }} /></button>
        </div>
    )
}

export default Toggle