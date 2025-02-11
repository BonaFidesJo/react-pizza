import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./Header.jsx"





function App() {


	return (

		<main className="page">
			<Header></Header>
		</main>


	);
}



const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");



// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>

		<App />

	</React.StrictMode>
);
