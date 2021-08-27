import styles from '../../styles/components/LayoutMovies.module.css';

import { FaSearch } from 'react-icons/fa'
import Link from 'next/link';
import { useState } from 'react';
import Header from '../Header';

export default function LayoutMovies ({backgroud, children}) {
    return (
        <>
            <Header />
            <main className={styles.bodyMain} style={{backgroundImage: backgroud}}>
                <div className={styles.blurMain}>
                    <div className={styles.containerMain}>
                        {children}
                    </div>                
                </div>
            </main>
            <footer></footer>
        </>
    )
}