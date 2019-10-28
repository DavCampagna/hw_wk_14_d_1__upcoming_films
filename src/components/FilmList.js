import React, { Component } from 'react';
import FilmItem from './FilmItem'
class FilmList extends Component {

  render() {
    const filmNodes = this.props.films.map(film => {
      return(
        <FilmItem key={film.id} url={film.url} name={film.name}></FilmItem>
      )
    })
    return(
      <div className="film-list">  
            {filmNodes}
      </div>
    )
  }
}

export default FilmList;
