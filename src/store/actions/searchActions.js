export const searchMovie = (searchText, page) => {
  return (dispatch, getState) => {
    fetch(`http://www.omdbapi.com/?apikey=ce125e1f&s=${searchText}&page=${page}`)
    .then(response => response.json())
    .then((movies) =>{
      dispatch({
        type: 'SEARCH_MOVIES',
        searchText: searchText,
        movies: movies,
        page: page
      });
    });
  }
}
 
export const getMovieDetails = (imdbID) => {
  return (dispatch, getState) => {
    fetch(`http://www.omdbapi.com/?apikey=ce125e1f&i=${imdbID}`)
    .then(response => response.json())
    .then((movie) =>{
      dispatch({
        type: 'GET_MOVIE_DETAILS',
        movieDetails: movie
      });
    });
  }
}
 