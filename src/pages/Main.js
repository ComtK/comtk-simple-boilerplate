import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
	return (
		<div>
			Main
			<br />
			<Link to={'/home'}>Home</Link>
			<Link to={'/about'}>about</Link>
		</div>
	);
};

export default Main;
