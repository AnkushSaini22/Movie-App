import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated?api_key=8265bd1679663a7ea12ac168da84d2e8&language=en-US&page=10")
      .then((response) => {
        console.log(response);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const searchMovie = () => {
    let searchTerm = document.querySelector("#search").value;
    navigate('/search/' + searchTerm); // Use navigate from useNavigate hook
  };

  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Welcome to my movie app</h1>
          <p className="display-4">A place where you can have all information about all your movies</p>
          <input type="text" id="search" className="form-control" placeholder="Search any movie"></input><br></br>
          <button onClick={searchMovie} className="btn btn-dark btn-lg">Search</button> {/* Use searchMovie directly */}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Top Movies</h3>
          </div>
          <div className="row">
            {movies.map((movie, index) => ( // Use movies directly
              <div className="col-4" key={index}>
                <Card id={movie.id} name={movie.title} overview={movie.overview} path={movie.poster_path} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
