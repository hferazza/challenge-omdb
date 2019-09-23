import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchMovie } from '../../store/actions/searchActions';

class SearchForm extends Component {
  
  constructor(props){
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchMovie(this.state.search,1);
    this.props.history.push('/search');
  }

  render(){
    return (
      <nav className="nav-wrapper grey darken-2">
        <form onSubmit={this.handleSubmit}>
          <div className="input-field">
            <input id="search" type="search" required onChange={this.handleChange}/>
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </nav>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchMovie: (titleSearch) => dispatch(searchMovie(titleSearch))
  }
};

export default withRouter(
  connect(null,mapDispatchToProps)(SearchForm)
);
