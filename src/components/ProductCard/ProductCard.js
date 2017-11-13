import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    return (
      <div className="product-card">
        <img src={this.props.image.thumbnail} alt={this.props.image.alt} />
      </div>
    );
  }
}

export default ProductCard;
