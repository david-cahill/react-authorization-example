import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from './actions/UserActions.js';
import { Link } from 'react-router'

@connect(null, { login })
class Home  extends Component {
  loginHandler = () => {
  	const payload = {
  		username: 'dc@gmail.com',
  		password: 'test12345'
  	}
  	this.props.login(payload)
  }	

  render() {
    return (
      <div className="App">
        Home
        <div><Link to="admin">Admin section</Link></div>
        <div><Link to="admin/users">Admin users section</Link></div>
	    <button type="submit" onClick={this.loginHandler}>Login</button>
      </div>
    );
  }
}

export default Home;
