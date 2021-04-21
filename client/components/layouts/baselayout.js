
import React from 'react';
import Header from '../shared/Header';
import styles from './Baselayout.module.scss';
import Basepage from './basepage'
const BaseLayout = (props) => {

    const { className, children } = props;
    return (
        <div className={styles.layout} className="cover"        >
            <Header />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    <Basepage>
                        {children}
                    </Basepage>
                </div>
            </main>
        </div >
    )
}

export default BaseLayout;

