import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from './actions/UserActions.js'

@connect((state) => ({}), { logout })
export default class Admin extends Component {
	logoutHandler = () => {
		this.props.logout()
	}

	render() {
		return (
			<div>
				<div>Welcome to the admin section</div>
				{this.props.children}
				<button onClick={this.logoutHandler}>Logout</button>
			</div>
		)
	}
}
