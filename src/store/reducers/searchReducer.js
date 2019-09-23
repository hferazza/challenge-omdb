const initState = {
  titleSearch: '',
  movies: {},
  page: 1
}
const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES':
      return {
        titleSearch: action.searchText,
        movies: action.movies,
        page: action.page
      }
    case 'GET_MOVIE_DETAILS':
        return {
          ...state,
          movieDetails: action.movieDetails
        }
    default:
      return state;
  }
}

export default searchReducer;