import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Home from './Home'
import Authorize from './Authorize';
import Admin from './Admin';
import './index.css';
import store from './configureStore.js'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

const requireAuth = (nextState, replace) => {
	if(!sessionStorage.getItem('session')) return replace('/')
}

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}/>
				<Route path="admin" component={Authorize(Admin)} onEnter={requireAuth}/>
			</Route>
		</Router>
	</Provider>,
  	document.getElementById('root')
);
