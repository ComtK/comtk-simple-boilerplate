import React from 'react'; 
import { Route, Routes } from 'react-router-dom';
import About from '../src/pages/About';
import Home from '../src/pages/Home';
import Main from '../src/pages/Main';
import NotFound from '../src/pages/NotFound';
import Test from '../src/pages/test/Test';

const CustomRouter = () => {
	return (
		<Routes>

			<Route path={'/About'} element={< About />} />
			<Route path={'/Home'} element={< Home />} />
			<Route path={'/'} element={< Main />} />
			<Route path={'/NotFound'} element={< NotFound />} />
			<Route path={'/test/Test'} element={< Test />} />

		</Routes>
	);
};

export default CustomRouter;