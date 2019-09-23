import React, { Component } from 'react';
import SearchForm from '../parts/SearchForm';
import '../../assets/css/SearchPage.css';
import { connect } from 'react-redux';
import GridMovies from '../parts/GridMovies';

class SearchPage extends Component{
  render(){
    return (
      <div className="Search grey darken-4">
        <div className="container">
          <div className="space"></div>
          <SearchForm />
          <h4>{this.props.titleSearch === "" ? "Campo de pesquisa vazio": `Resultado da pesquisa por "${this.props.titleSearch}"` }</h4>
          <GridMovies movies={this.props.movies} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    titleSearch: state.search.titleSearch,
    movies: state.search.movies
  }
}

export default connect(mapStateToProps)(SearchPage);