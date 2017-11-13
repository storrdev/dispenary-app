import React from 'react';
import ReactDOM from 'react-dom';

import ProductCard from './ProductCard';

import product from './product.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductCard {...product} />, div);
});