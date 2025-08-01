import React from "react";
import styles from './viewMore.module.scss';

type Props = {
    color?: string;
}

const ViewMore: React.FC<Props> = ({ color }) => {
    return (
        <div className={styles.container} style={{borderColor: color}}>
            <p style={{ fontSize: '32px', color: color }}>&middot;&middot;&middot;</p>
        </div>
    )
}

export default ViewMore;