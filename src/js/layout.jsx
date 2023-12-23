import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./views/home.jsx";

import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import Contacts from "./views/Contacts.jsx";
import EditContact from "./views/EditContact.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar  />
					<Routes>
						<Route path="/" element={<Home />} />	
						<Route path="/contact" element={<Contacts />} />
						<Route path="/editContact/:id" element={<EditContact />} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
