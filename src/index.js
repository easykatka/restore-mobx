import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './components/app/app'
import { ErrorBoundry } from './components/error-boundry/error-boundry';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<ErrorBoundry>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ErrorBoundry>
	</React.StrictMode>,
	document.getElementById('root')
);
