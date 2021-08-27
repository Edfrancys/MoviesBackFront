import axios from 'axios';
import { useState, useEffect  } from 'react';
import moment from 'moment';


import styles from  '../../styles/pages/MoviePage.module.css'
import LayoutMovies from '../../components/Layout/Movies';

interface MovieDetailsType {
    id: number;
    backdrop_path: string;
    vote_average: number;
    poster_path: string;
    title: string;
    release_date: string;
    runtime: number;
    overview: string;
    genres: [GenresType];
}

interface GenresType {
    id: number;
    name: string;
}

const Movie = ({id}) => {
    
    const [movieDetails, setMovieDetails] = useState<MovieDetailsType>()    

    useEffect(()=>{        
        
        axios.get('http://app.localhost/api/filme/view/' + id )
        .then((resp) => {
            setMovieDetails(resp.data)   
        })        
        
    },[])     

    const bgImgConst = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/' + movieDetails.backdrop_path;
    const bgImg = 'url('+ bgImgConst +')';

    return (
        <LayoutMovies backgroud={bgImg}>
            <div className={styles.contentMovie}>
                <div className={styles.contentDetails}>
                    <div>
                        <h1><b>{movieDetails.title}</b> <small>({moment(movieDetails.release_date).format('YYYY')})</small></h1>
                        <p>{moment(movieDetails.release_date).format('DD [de] MMM [de] YYYY' )} -  
                        {
                            movieDetails.genres ?
                            movieDetails.genres.map((value, key) => (
                                <button key={key}>{value.name}</button>
                            ))
                            : ''
                        }
                        
                        </p>


                        <h2>Duração: {
                            Math.trunc(movieDetails.runtime / 60) + 'h' + movieDetails.runtime % 60 + 'min'
                        }</h2>
                        
                        <div className={styles.sinopse}>
                            <div>
                                <h2>SINOPSE</h2>
                                <h2>Classificação: <span>{movieDetails.vote_average}/10</span></h2>
                            </div>                            
                            <p>{movieDetails.overview}</p>
                        </div>
                    </div>
                    <div>
                        <img src={'https://image.tmdb.org/t/p/w300_and_h450_bestv2/' + movieDetails.poster_path} />
                    </div>
                </div>
                
                
            </div>            
        </LayoutMovies>
    )
}

Movie.getInitialProps = ({ query: { id }}) => {
    return { id }
}


export default Movie;
