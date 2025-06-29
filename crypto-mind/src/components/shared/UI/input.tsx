import React from "react";
import styles from './input.module.scss';

type Props = {
    type: string
    placeHolder: string
    icon: any
}

const InputBox:React.FC<Props> = ({type, placeHolder, icon}) => {
    return(
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <input type= {type} placeholder={placeHolder} className={styles.input}/>
            <img src={icon} alt={`${placeHolder} icon`} className={styles.icon}/>
        </div>
    )
}

export default InputBox