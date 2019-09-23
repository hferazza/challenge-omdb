import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/MovieCard.css';
import MovieDetails from '../parts/MovieDetails';
import { getMovieDetails } from '../../store/actions/searchActions';

class MovieCard extends Component {
  constructor(props){
    super(props);
    this.state = this.initState;
  }
  
  get initState() {
    return {
      movieDetails: '',
    }
  }

  getDetails = (imdbID) => {
    this.props.getMovieDetails(imdbID);
  }

  render() {
    const { movie, movieDetails } = this.props;
    return (
      <div className="zoom col s3" onClick={() => this.getDetails(movie.imdbID)}>
        <MovieDetails 
          movieDetails={movieDetails}
          trigger={
            <div className="card small horizontal" >
              <div className="card-image">
                <img alt={`${movie.Title}'s Poster`} src={movie.Poster === "N/A" ? "" : movie.Poster} />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p className="movie-type red-text text-darken-2">{movie.Type}</p>
                  <span className="card-title small grey-text text-darken-4 trunc">{movie.Title}</span>
                  <p className="green-text text-accent-4">{movie.Year}</p>
                </div>
                <div className="card-action">
                  <div className="red-text text-darken-4">VER MAIS</div>
                </div>
              </div>
            </div>
          }
        />
     </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    movieDetails: state.search.movieDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieDetails: (imdbID) => dispatch(getMovieDetails(imdbID))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(MovieCard);

        /* <div className="card small horizontal" onClick={() => this.getDetails(movie.imdbID)}>
          <div className="card-image">
            <img alt={`${movie.Title}'s Poster`} src={movie.Poster === "N/A" ? "" : movie.Poster} />
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <p className="movie-type red-text text-darken-2">{movie.Type}</p>
              <span className="card-title small grey-text text-darken-4 trunc">{movie.Title}</span>
              <p className="green-text text-accent-4">{movie.Year}</p>
            </div>
            <div className="card-action">
              <MovieDetails 
                header={movie.Title} 
                movieDetails={movieDetails}
                trigger={
                
                
                
                  <div className="red-text text-darken-4">VER MAIS</div>
                
                }
              />
            </div>
          </div>
        </div> */