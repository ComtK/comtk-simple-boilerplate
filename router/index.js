import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../src/pages/About';
import Home from '../src/pages/Home';

const CustomRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				children={({ history, location, match }) => {
					const Page = lazy(() =>
						import('./pages' + location.pathname).catch((e) => {
							if (/not find module/.test(e.message)) {
								return import('../src/pages/NotFound.js');
							}
							if (/Loading chunk \d+ failed/.test(e.message)) {
								window.location.reload();
								return;
							}
							throw e;
						})
					);
					return (
						<Suspense fallback={<div>Loading..</div>}>
							<Page />
						</Suspense>
					);
				}}
			/>

			{/* <Route path={'/'} element={<Home />} />
			<Route path={'/about'} element={<About />} /> */}
		</Routes>
	);
};

export default CustomRouter;
