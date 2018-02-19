import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  actionFirst,
  actionSecond,

} from './actions/appActions';

import './App.css';

class App extends Component {
  onClick = (e) => {  
    if(e.target.innerHTML === 'First Action') {
      this.props.actionFirst();  
    } else {
      this.props.actionSecond();  
    }      
  }
  render() {
    return (
      <div className="App">
        <p>{this.props.appData}</p>
        <button onClick={this.onClick}>First Action</button>
        <button onClick={this.onClick}>Second Action</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  actionFirst: payload => dispatch(actionFirst(payload)),
  actionSecond: payload => dispatch(actionSecond(payload)),
});

const mapStateToProps = (state) => ({
  appData: state.app.appData
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
