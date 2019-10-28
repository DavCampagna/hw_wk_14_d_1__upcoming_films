import React, { Component } from 'react';

class FilmItem extends Component {

  render() {
    return(
      <div className="film-item">
        <li><a href={this.props.url} target="_blank">{this.props.name}</a></li>
      </div>
    )
  }
}

export default FilmItem;
