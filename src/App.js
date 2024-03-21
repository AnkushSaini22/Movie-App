import React, { Component } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Search from './Search';
import MovieDetails from './Moviedetail';
import { Routes, Route } from 'react-router-dom'; // Import from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/details/:id" element={<MovieDetails />} />
          <Route path="/search/:term" element={<Search />} />
        </Routes>
      </div>
    );
  }
}

export default App;
