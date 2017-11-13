import React, { Component } from 'react';

import ProductListing from '../ProductListing';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <ProductListing />
      </div>
    );
  }
}

export default LandingPage;
