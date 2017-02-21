import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import Home from './Home'
import Authorize from './Authorize';
import Admin from './Admin';
import AdminUsers from './AdminUsers'
import './index.css';
import store from './configureStore.js'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
injectTapEventPlugin();

const muiTheme = getMuiTheme(darkBaseTheme);

const requireAuth = (nextState, replace) => {
	if(!sessionStorage.getItem('session')) return replace('/')
}

render(
	<Provider store={store}>
		<MuiThemeProvider muiTheme={muiTheme}>
			<Router history={browserHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="admin" component={Authorize(Admin)} onEnter={requireAuth}>
						<Route path="users" component={AdminUsers}/>
					</Route>
				</Route>
			</Router>
		</MuiThemeProvider>
	</Provider>,
  	document.getElementById('root')
);
