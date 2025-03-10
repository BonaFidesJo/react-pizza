import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Provider } from 'react-redux';

import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";

import NotFound from "./pages/NotFound.jsx";
// import FullPizza from "./pages/FullPizza.jsx";

import { store } from "./redux/store.js";
import MainLayout from "./layouts/MainLayout.jsx";

// export const SearchContext = React.createContext();



function App() {

	// const [searchValue, setSearchValue] = React.useState('');

	return (

		// <SearchContext.Provider value={{ searchValue, setSearchValue }}> 

		< Routes >
			<Route path="/" element={<MainLayout />}>
				<Route path="" element={<Home />} exact />
				<Route path="cart" element={<Cart />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</ Routes >


		//</SearchContext.Provider> 
	);
}


const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");


ReactDOM.createRoot(root).render(
	// <React.StrictMode>
	<Router>
		<Provider store={store}>
			<App />
		</Provider>
	</Router>
	// </React.StrictMode>
);
