import React, { Component } from 'react';
import flats from "../../data/flats";

class Flat extends Component {
  handleClick = () => {
    if (this.props.selectFlat) {
      this.props.selectFlat(this.props.id);   
    }
  }

  render() {
    return (
      <div className="card" style={{ backgroundImage: `url(${this.props.imageUrl})` }}>
        <div className="card-category">{this.props.priceCurrency}{this.props.price}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Flat;
