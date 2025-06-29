import React from "react";
import styles from './layout.module.scss';

type Props = {
    children: any
}

const Layout: React.FC<Props> = ({children}) => {
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default Layout