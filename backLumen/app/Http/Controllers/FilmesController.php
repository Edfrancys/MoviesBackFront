<?php

namespace App\Http\Controllers;

class FilmesController extends Controller
{
    protected $apiKey = '4ec327e462149c3710d63be84b81cf4f';
    protected $baseUrl = 'https://api.themoviedb.org/4/';
    protected $baseUrlV3 = 'https://api.themoviedb.org/3/';    

    public function index ($id = '1')
    {        
        $url = $this->baseUrlV3 . 'discover/movie?api_key='.$this->apiKey.'&language=pt-BR&sort_by=popularity.desc&page='. $id;

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);

        $result = curl_exec($ch);

        curl_close($ch);
        
        return $result;
    }

    public function view ($idMovie = '1')
    {       
        $url = $this->baseUrlV3 . 'movie/'. $idMovie .'?api_key='.$this->apiKey.'&language=pt-BR';

        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);

        $result = curl_exec($ch);

        curl_close($ch);
        
        return $result;
    }

    public function search ($query = null)
    {        
        $url = $this->baseUrlV3 . 'search/movie?query='. $query .'&language=pt-BR&api_key='.$this->apiKey;
        
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");        
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);

        $result = curl_exec($ch);

        curl_close($ch);
        
        return $result;
    }

}
