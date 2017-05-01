import React      from 'react'
import ReactDOM   from 'react-dom';
import {Provider} from 'react-redux'
/**
 * Create REDUX store
 */
// Redux middleware
// Try use hitory from router
import {routerMiddleware}       from  'react-router-redux'
import createHistory            from 'history/createBrowserHistory'

const history = createHistory()
const routerMiddlewareInstance = routerMiddleware(history)
// Thunk for action as function
import thunkMiddleware from 'redux-thunk';
// Log into DevTool (DevTool of Chrome)
import loggerMiddleware from 'redux-logger';
// Middlewares
const middlewares = [routerMiddlewareInstance, thunkMiddleware, loggerMiddleware];
// Reducers
import adminPage from './reducers'
// Build redux with middleware
import {createStore, applyMiddleware} from 'redux';
// XYZ to work with DevTool
import {composeWithDevTools} from 'redux-devtools-extension';
// Store
const store = createStore(adminPage, composeWithDevTools(applyMiddleware(...middlewares)),);

/**
 * Render app
 */
//import {App, Login, Logout, ReservationList} from './components'
import App                   from './components/App'
import {ConnectedRouter}     from 'react-router-redux'

// Add router
import {
	BrowserRouter as Router, Route, Link
} from 'react-router-dom'


ReactDOM.render(<Provider store={store}>
	<ConnectedRouter history={history}>
		<Router>
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
				</ul>

				<hr/>

				<Route exact path="/" component={App}/>
			</div>
		</Router>
	</ConnectedRouter>
</Provider>, document.getElementById('root'));