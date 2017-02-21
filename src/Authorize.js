import React, { Component } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { retrieveSession } from './actions/UserActions.js'

@connect((state) => ({}), { retrieveSession })
export default function (ChildComponent) { 
	return class Authorize extends Component {
		componentWillMount() {
			this.props.retrieveSession()
		}

		render() {
			return <ChildComponent { ...this.props} />
		}
	}
} 