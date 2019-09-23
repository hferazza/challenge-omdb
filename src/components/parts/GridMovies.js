import React, { Component } from 'react';
import '../../assets/css/GridMovies.css'
import { connect } from 'react-redux';
import MovieCard from '../parts/MovieCard';
import { Pagination } from 'react-materialize';
import { searchMovie } from '../../store/actions/searchActions';

class GridMovies extends Component {

  getMoviesByPage = (page) => {
    this.props.searchMovie(this.props.titleSearch, page);
  }

  render() {
    const { movies } = this.props;
    const results = movies && movies.Search;
    return (
      <React.Fragment>
        <h5>{`${(movies.totalResults) ? movies.totalResults : "Nenhum "} filme(s) encontrado(s)`}</h5>
        <div className="divider"></div>
        <div className="row">
          {results && results.map((movie, key) => {
            return (
              <React.Fragment key={key}>
                <MovieCard movie={movie} />          
              </React.Fragment>
            );
          })}
        </div>
        {(movies.totalResults) 
          ? 
          <Pagination
            activePage={1}
            maxButtons={8}
            items={Math.round(movies.totalResults / 10)}
            onSelect={(page)=>this.getMoviesByPage(page)} />
          :
          ""
        }        
      </React.Fragment >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    titleSearch: state.search.titleSearch,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovie: (titleSearch, page) => dispatch(searchMovie(titleSearch, page))
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(GridMovies);