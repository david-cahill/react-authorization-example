import request from 'superagent';
import { browserHistory } from 'react-router';

export function setUser(user) {
	return {
		type: 'SET_USER',
		user
	}
}

export function login(payload) {
	return (dispatch) => {
		request
	    .post('/auth/login')
	    .send(payload)
	    .set('Content-Type', 'application/json')
	    .end((err, { body: { login } }) => {
	    	if (err) return console.error(err)
	        dispatch(setUser(login))
	    	sessionStorage.setItem('session', login.token);
	        return browserHistory.push('admin')
	    })
	}
}

export function retrieveSession() {
	return (dispatch) => {
		request
		.get('/auth/user')
		.end((err, { body: { login } }) => {
			if (err) return console.error(err)
			console.log('**** login = ', login)
			if (login.token) return dispatch(setUser(login))
			return browserHistory.push('/')
		})
	}
}

export function logout() {
	return (dispatch) => {
		request
		.get('/auth/logout')
		.end((err, { body }) => {
			if (err) return console.error(err)
			sessionStorage.removeItem('session');
			return browserHistory.push('/')
		})
	}
}