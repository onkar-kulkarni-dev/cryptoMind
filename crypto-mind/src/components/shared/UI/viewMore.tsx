import React from "react";
import styles from './viewMore.module.scss';
import { ReactComponent as ArrowIcon } from '../../../assets/diagonalArrow.svg';

type Props = {
    color?: string;
    type: string;
}

const ViewMore: React.FC<Props> = ({ color, type }) => {
    return (
        <div className={styles.container} style={{borderColor: color}}>
            {type === "arrow" && <ArrowIcon style={{ width: '20px', height: '20px', color: color }} />}
            {type == "dot" && <p style={{ fontSize: '32px', color: color }}>&middot;&middot;&middot;</p>}
        </div>
    )
}

export default ViewMore;