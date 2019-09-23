import React, { Component } from 'react';
import { Modal, Row, Col, Collection, CollectionItem, Icon } from 'react-materialize';
import '../../assets/css/MovieDetails.css';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = this.initState;
  }

  get initState() {
    return {
      movie: '',
    }
  }

  render() {
    const { trigger, movieDetails } = this.props;
    const title = movieDetails && movieDetails.Title;
    const plot = movieDetails && movieDetails.Plot;
    const poster = movieDetails && movieDetails.Poster;
    const year = movieDetails && movieDetails.Year;
    const runtime = movieDetails && movieDetails.Runtime;
    const genre = movieDetails && movieDetails.Genre;
    const director = movieDetails && movieDetails.Director;
    const actors = movieDetails && movieDetails.Actors;
    const language = movieDetails && movieDetails.Language;
    const country = movieDetails && movieDetails.Country;
    const production = movieDetails && movieDetails.Production;
    const metascore = movieDetails && movieDetails.Metascore;
    const imdbrating = movieDetails && movieDetails.imdbRating;
    const imdbvotes = movieDetails && movieDetails.imdbVotes;

    return (
        <Modal trigger={trigger}>
          <Row>
            <h3>{title} (<span className="green-text text-accent-4">{year}</span>)</h3>
            <Col s={4}>
              <img className="poster" alt={`${title}'s Poster`} src={poster === "N/A" ? "" : poster} />
              <Collection>
                <CollectionItem>
                <span className="title">Avaliações</span><br/>
                  <strong>Metascore: </strong><span>{metascore}</span><br/>
                  <strong>IMDb Rating: </strong><span>{imdbrating}</span><br/>
                  <strong>IMDb Votes: </strong><span>{imdbvotes}</span><br/>
                </CollectionItem>
              </Collection>
            </Col>
            <Col s={8}>
              <Collection>
                <CollectionItem className="avatar">
                  <Icon className="grey darken-4 circle">feedback</Icon>
                  <span className="title">Resumo</span>
                  <p>{plot}</p>
                </CollectionItem>
                <CollectionItem className="avatar">
                  <Icon className="pink darken-4 circle">language</Icon>
                  <strong>Linguagem: </strong><span>{language}</span><br/>
                  <strong>País de origem: </strong><span>{country}</span>
                </CollectionItem>
                <CollectionItem className="avatar">
                  <Icon className="green darken-4 circle">access_time</Icon>
                  <span className="title">Duração</span>
                  <p>{runtime}</p>
                </CollectionItem>
                <CollectionItem className="avatar">
                  <Icon className="red darken-4 circle">insert_emoticon</Icon>
                  <span className="title">Gênero</span>
                  <p>{genre}</p>
                </CollectionItem>
                <CollectionItem className="avatar">
                  <Icon className="blue darken-4 circle">people</Icon>
                  <span className="title">Atores</span>
                  <p>{actors}</p>
                </CollectionItem>
                <CollectionItem className="avatar">
                  <Icon className="purple darken-4 circle">person</Icon>
                  <span className="title">Direção</span>
                  <p>{director}</p>
                </CollectionItem>
                <CollectionItem className="avatar">
                  <Icon className="cyan darken-4 circle">movie_creation</Icon>
                  <span className="title">Produção</span>
                  <p>{production}</p>
                </CollectionItem>
              </Collection>
            </Col>
          </Row>
        </Modal>
    );
  }
}

export default MovieDetails;