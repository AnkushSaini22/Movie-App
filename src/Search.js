import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';

function Search() {
    const [movies, setMovies] = useState([]);
    const [term, setTerm] = useState('');
    const { term: searchTerm } = useParams();

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US&page=1&include_adult=false&query=${searchTerm}`)
            .then((response) => {
                console.log(response.data.results)
                setMovies(response.data.results);
                setTerm(searchTerm);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [searchTerm]);

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-12">
                    <h4>Search Results </h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <h5 className="display-4">{term.toUpperCase()}</h5>
                </div>
                {
                    movies.map((movie, index) => (
                        <div className="col-3" key={index}>
                            <Card id={movie.id} name={movie.title} overview={movie.overview} path={movie.poster_path} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Search;
