import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';


import styles from '../../../styles/pages/HomePage.module.css'
import Layout from '../../../components/Layout';
import Pagination from '../../../components/Pagination';
import Link from 'next/link';

const Search = ({ query }) => {

    const [movieDetails, setMovieDetails] = useState({})
    const [queryResults, setQueryResults] = useState([])
    const [page, setPage] = useState(1)
    const [offset, setOffset] = useState(0);    

    useEffect(() => {

        axios.get('http://app.localhost/api/filme/search/' + query + '&page=' + page)
            .then((resp) => {
                setMovieDetails(resp.data)
                setQueryResults(resp.data.results)
            })
            console.log(movieDetails);
            

    }, [offset])

    console.log(offset);
    

    return (
        <Layout>
            <div className={styles.contentFilm}>

                <h1>Resultado da Pesquisa</h1>

                <div className={styles.gridFilms}>
                    {queryResults.map((filme, key) => (
                            <Link href={'/movie/' + filme.id}>
                                <a>
                                    <div className={styles.itemMovies} key={key}>

                                        <div className={styles.voteMovie}>
                                            <span>{filme.vote_average}/10</span>
                                        </div>
                                        <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + filme.poster_path} />

                                        <div className={styles.movieDetails}>
                                            <p className={styles.title}>{filme.title}</p>
                                            <p className={styles.release}>{filme.release_date}</p>
                                        </div>

                                    </div>
                                </a>
                            </Link>
                        ))}
                </div>

                <Pagination limit={20} total={movieDetails.total_results} totalPages={movieDetails.total_pages} offset={offset} setOffset={setOffset} setPage={setPage}/>

            </div>
        </Layout>
    )
}

Search.getInitialProps = ({ query: { query } }) => {
    return { query }
}


export default Search;
