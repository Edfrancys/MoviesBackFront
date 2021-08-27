import styles from '../../styles/components/Layout.module.css';
import Header from '../Header';


export default function Layout ({children}) {
    return (
        <>
            <Header />
            <main className={styles.bodyMain}>
                <div className={styles.containerMain}>
                    {children}
                </div>                
            </main>
            <footer></footer>
        </>
    )
}