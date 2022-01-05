import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../src/pages/About';
import Home from '../src/pages/Home';
import Test from '../src/pages/test/Test';

const CustomRouter = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Home />} />
			<Route path={'/about'} element={<About />} />
			<Route path={'/test/Test'} element={<Test />} />
		</Routes>
	);
};

export default CustomRouter;
