import React, { Component } from 'react';

class FilmItem extends Component {

  render() {
    return(
      <div className="film">
        <p>{this.props.name}</p>
      </div>
    )
  }
}

export default FilmItem;
