import React from "react";
import styles from './layout.module.scss';
import Navbar from "components/shared/navbar/navbar";

type Props = {
    children: any
}

const Layout: React.FC<Props> = ({children}) => {
    return(
        <div className={styles.container}>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout