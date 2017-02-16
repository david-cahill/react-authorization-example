import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { retrieveSession } from './actions/UserActions.js'

@connect((state) => ({}), { retrieveSession })
export default function (ChildComponent) { 
	return class Authorize extends Component {
		componentWillMount() {
			//console.log('****')
			this.props.retrieveSession()
		}

		componentWillReceiveProps(nextProps) {
			//const { token } = this.props.user.user
		}

		componentDidMount() {
			//console.log('*****')
			//this.props.retrieveSession()
		}

		render() {
			//console.log('*** sessionStorage = ', sessionStorage.getItem('session'))
			return <ChildComponent { ...this.props} />
		}
	}
} 