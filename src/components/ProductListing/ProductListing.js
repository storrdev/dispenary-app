import React, { Component } from 'react';
import { fetch } from '@fyresite/fetch';

import ProductListingItem from '../ProductListingItem';

class ProductListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      products: []
    };
  }

  componentDidMount() {
    // Make API request for products
    fetch('/api/v1/products', {
      mode: process.env.NODE_ENV !== 'production' ? 'cors' : 'no-cors'
    }).then(res => {
      return res.json();
    }).then(products => {
      this.setState((prevState, props) => ({
        loading: false,
        products
      }));
    }).catch(err => {
      alert('There was an error getting the products');
      console.error(err);
    });
  }

  render() {
    return (
      <div className="product-listing">
        {
          this.state.loading ?
            <div className="loading">Loading...</div>
            :
            this.state.products.map((product, index) => {
              return <ProductListingItem key={index} {...product} />;
            })
        }
      </div>
    );
  }
}

export default ProductListing;
