import React, { Component } from 'react';

let colors = [
  '#2980B9',
  '#2980B9',
  '#F7DC6F',
  '#E74C3C',
  '#73C6B6',
  '#5D6D7E'
];

class ProductListingItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      loading: true,
      image: '',
      color: colors[Math.floor(Math.random()*colors.length)]
    };

    this.getImage = this.getImage.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);

    this.getImage(this.props.image.thumbnail);
  }

  getImage(url) {
    let downloadingImage = new Image();
    downloadingImage.onload = () => {
      this.setState((prevState, props) => ({ image: url }));
    };

    downloadingImage.src = url;
  }

  handleClick(e) {
    // Start asyncronous call early
    this.getImage(this.props.image.small);

    this.refs.self.style.height = '';

    this.setState((prevState, props) => ({
      open: !prevState.open
    }));
  }

  handleResize() {
    if (!this.state.open) {
      let width = this.refs.self.offsetWidth;
      this.refs.self.style.height = `${width}px`; 
    }
  }

  render() {
    let classes = ['product-listing-item'];

    if (this.state.open) {
      classes.push('open');
    }

    let imageStyle = {
      backgroundColor: this.state.color,
      backgroundImage: `url(${this.state.image})`
    };

    return (
      <div className={classes.join(' ')} ref="self">
        <div className="image" style={imageStyle} onClick={this.handleClick.bind(this)}></div>
      </div>
    );
  }
}

export default ProductListingItem;
