import React from 'react';
import SearchForm from '../parts/SearchForm';
import '../../assets/css/HomePage.css';

const HomePage = () => {
  return (
    <div className="Home grey darken-4">
      <div className="container">
        <h2>Pesquise por filmes e séries</h2>
        <SearchForm />
      </div>
    </div>
  );
};

export default HomePage;