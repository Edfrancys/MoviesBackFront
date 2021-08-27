import React, { useState } from 'react';
import styles from '../../styles/components/Header.module.css';
import { FaSearch } from 'react-icons/fa'

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header () {

    const [searchQuery , setSearchQuery] = useState('');
    const Router = useRouter();

    const handleChange = evt => {
        setSearchQuery(evt.target.value)        
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        Router.push('/movie/search/' + searchQuery)

    };
    
    

    return (
        <header className={styles.header}>
                <div className={styles.headerLogo}>
                    <img src='https://image.flaticon.com/icons/png/512/3074/3074767.png' alt="logo_Movies"/>
                    <p>MOVIES</p>
                </div>
                <div className={styles.headerMenu}>
                    <Link href="/"><a>HOME</a></Link>
                </div>
                <div>
                    <form className={styles.headerSearch} onSubmit={handleSubmit}>
                        <input type="text"
                            name="query" 
                            placeholder="Procurar filme..."
                            value={searchQuery}
                            onChange={handleChange}
                            />
                        <button type="submit">
                            <FaSearch/>
                        </button>
                    </form>
                </div>
            </header>
    )
}