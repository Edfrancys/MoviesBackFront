import { useEffect, useState }  from 'react'
import Link from 'next/link'
import axios from 'axios';

import Layout from '../components/Layout'
import Pagination from '../components/Pagination';

import styles from '../styles/pages/HomePage.module.css'


const HomePage = () => {

    const [listMovies, setListMovies] = useState([])
    const [listDetails, setListDetails] = useState({})
    const [page, setPage] = useState(1)
    const [offset, setOffset] = useState(0);  

    useEffect(()=>{               
        
        axios.get('http://app.localhost/api/filme/' + page)
        .then((resp) => {
            setListDetails(resp.data)
            setListMovies(resp.data.results)    
        })        
        
    },[offset])              

        
    return (
        <Layout>
            <div className={styles.contentFilm}>

                <h1>Lista de Filmes</h1>
                
                <div className={styles.gridFilms}>
                    {listMovies.map((filme, key)=>(
                        <Link href={'/movie/' + filme.id}>
                            <a>
                                <div className={styles.itemMovies} key={key}>
                                
                                    <div className={styles.voteMovie}>
                                        <span>{filme.vote_average}/10</span>
                                    </div>
                                    <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+filme.poster_path} />
                                    
                                    <div className={styles.movieDetails}>
                                        <p className={styles.title}>{filme.title}</p>
                                        <p className={styles.release}>{filme.release_date}</p>
                                    </div>
                                                        
                                </div>
                            </a>
                        </Link>  
                    ))}
                </div>

                <Pagination limit={20} total={listDetails.total_results} totalPages={listDetails.total_pages} offset={offset} setOffset={setOffset} setPage={setPage} />
                
            </div>
        </Layout>
    )
}

// HomePage.getInitialProps = async () => {
//     const resp = await axios.get('http://app.localhost/api/filme/2') 
       
//     return {
//         dados: resp.data
//     }
// }

export default HomePage;