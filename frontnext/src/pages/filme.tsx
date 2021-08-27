import { useEffect, useState }  from 'react'
import axios from 'axios';

const HomePage = (dados) => {
    const filmList = dados.dados.results;
    console.log(filmList);
    
    return (
        <div>
            <p>Hello!</p>
            {filmList.map((filme, key)=>(
            <div id={key}>
                    {filme.title}
                </div>
            ))}
            
        </div>
    )
}

HomePage.getInitialProps = async () => {
    const resp = await axios.get('http://app.localhost/api/filme/') 
    console.log(resp.data);
       
    return {
        dados: resp.data
    }
}

export default HomePage;