import React from "react";
import { Header } from "app/containers/Header";
import { HomePage } from "app/pages/HomePage";
import { Route, Switch } from 'react-router-dom';
import Footer from "app/containers/Footer";


const HomeLayout = () => {
	return (
		<React.Fragment>
			<Header />
			<Switch>
				<Route path='/' exact component={HomePage} />
			</Switch>
			<Footer />
		</React.Fragment >
	);
};

export default HomeLayout;	