import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppBar from 'material-ui/AppBar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import { browserHistory } from 'react-router'
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper';
import logo from './logo.svg';
import { selectBottomNavigation } from './actions/BottomNavigationActions'
import './App.css';

const recentsIcon = <FontIcon className="material-icons"></FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;

@connect((state) => ({
	selectedIndex: state.bottomNavigationReducer.selectedIndex
}), { selectBottomNavigation })
class App extends Component {
  	selectBottomNavigation = (index, routeName) => {
  		this.props.selectBottomNavigation(index)
  		browserHistory.push(routeName)
  	}

	render() {
		return (
		  <div className="App">
		  	<AppBar title="Authorization Example"/>
		  	{this.props.children}
		  	<div className="App-bottomNavigationBar">
			  	<Paper zDepth={1}>
			      	<BottomNavigation selectedIndex={this.props.selectedIndex}>
			      		<BottomNavigationItem label="Home" icon={recentsIcon} onTouchTap={() => this.selectBottomNavigation(0, '/')} />
			      		<BottomNavigationItem label="List" icon={recentsIcon} onTouchTap={() => this.selectBottomNavigation(1, '/admin')}/>
			      	</BottomNavigation>
			  	</Paper>
			</div>
		  </div>
		);
	}
}

export default App;
