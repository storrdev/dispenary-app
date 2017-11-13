import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateUser } from '../../redux/actions/user';

import LandingPage from '../../components/LandingPage';
import TopNav from '../../components/TopNav';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState((prevState, props) => ({ loading: false }));
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="app">
          <div className="loading">Loading...</div>
        </div>
      );
    }
    else {
      return (
        <div className="app">
          <TopNav />
          <Router>
            <Switch>
              <Route path="/" component={LandingPage} />
            </Switch>
          </Router>
        </div>
      );
    }
  }
}

function mapStateToProps({ user }) {
  return {
    user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
