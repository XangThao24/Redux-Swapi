import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import {fetchStarWarsChar} from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchStarWarsChar();
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Starwars Character</h1>
        {this.props.char.isFetching ? <div>Loading...........</div> : null}
          <ul>
            {this.props.char.starWarsChar.map(char => {
              console.log(char)
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapStateToProps = state => {
  return {
    char: state.charsReducer
  }
};

export default connect(mapStateToProps, { fetchStarWarsChar })(App);
