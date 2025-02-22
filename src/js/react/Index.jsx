import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";

import NotFound from "./pages/NotFound.jsx";

export const SearchContext = React.createContext();


function App() {

	const [searchValue, setSearchValue] = React.useState('');


	return (

		<main className="page">
			<SearchContext.Provider value ={{ searchValue, setSearchValue }}>
				<Header />
				<div className="content">
					<div className="content__container">

						<Routes>
							<Route path="/" element={<Home />} exact />
							<Route path="/cart" element={<Cart />} />
							<Route path="*" element={<NotFound />} />
						</ Routes >

					</div>
				</div>
			</SearchContext.Provider>
		</main>


	);
}


const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");


ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
