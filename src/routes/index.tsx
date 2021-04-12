import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ErrorBoundary from './../components/Error-Boundary/index';

import ProtectedRoute from './ProtectedRoute';

const SignIn = lazy(() => import('./../pages/SignIn/index'));
const Overview = lazy(() => import('./../pages/Overview/index'));

const index = () => {
	return (
		<Router>
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<div>...Loading</div>}>
						<Route path='/' exact component={SignIn} />
						<ProtectedRoute path='/overview' component={Overview} isProtected />
					</Suspense>
				</ErrorBoundary>
			</Switch>
		</Router>
	);
};

export default index;
