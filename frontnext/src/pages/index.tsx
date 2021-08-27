import { useEffect, useState }  from 'react'
import Link from 'next/link'
import axios from 'axios';

import Layout from '../components/Layout'
import Pagination from '../components/Pagination';

import styles from '../styles/pages/HomePage.module.css'

interface ListDetailsType {
    total_results: number;
    total_pages: number;
}
interface ListMoviesType {
    id: number;
    vote_average: number;
    poster_path: string;
    title: string;
    release_date: string;
}

const HomePage = () => {

    const [listMovies, setListMovies] = useState<ListMoviesType[]>([])
    const [listDetails, setListDetails] = useState<ListDetailsType>({} as any)
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
                        <Link href={'/movie/' + filme.id} key={key}>
                            <a>
                                <div className={styles.itemMovies} >
                                
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

export default HomePage;