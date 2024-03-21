import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom'; 

function MovieDetails() {
    const [details, setDetails] = useState({});
    const [recommend, setRecommend] = useState([]);
    const { id } = useParams(); // Use useParams hook to get route parameter

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US`)
            .then((response) => {
                setDetails(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US`)
            .then((response) => {
                setRecommend(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id]); // Add id as a dependency

    const renderGenre = () => {
        if (details.genres) {
            return details.genres.map((genre) => (
                <span key={genre.id} style={{ marginRight: 10 }}>{genre.name}</span>
            ));
        }
    };

    const releaseDate = new Date(details.release_date)?.getFullYear();

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src={`http://image.tmdb.org/t/p/w500/${details.poster_path}`} className="card-img-top" alt="..." />
                        </div>
                        <div className="col-9">
                            <h1 className="display-4">{details.title}({releaseDate})</h1>
                            <p>
                                {renderGenre()} 
                                       * {details.runtime} mins
                            </p>
                            <h4>{details.vote_average}</h4>
                            <p><b>{details.tagline}</b></p>
                            <h3>Overview</h3>
                            <p className="lead">{details.overview}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="display-4">Similar to {details.title}</h3>
                    </div>
                    {recommend.map((movie, index) => {
                        if (index < 12) {
                            return (
                                <div className="col-3" key={movie.id}>
                                    <Card id={movie.id} name={movie.title} overview={movie.overview} path={movie.poster_path} />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
