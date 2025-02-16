import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.jsx"
import Categories from "./components/Categories.jsx";
import Sort from "./components/Sort.jsx";
import Card from "./components/Card.jsx"

import Cart from "./pages/Cart.jsx";

import pizza from "./assets/pizza.json"

function App() {


	return (

		<main className="page">
			<Header></Header>

			<div className="content">
				<div className="content__container">
					<div className="content__nav nav-content">
						<Categories></Categories>
						<Sort></Sort>
					</div>

					<div className="content__body">
						<div className="content__title">Все пиццы</div>
						<div className="content__card card">
							{
								pizza.map((obj) => (
									<Card key={obj.id}
										{...obj}
									// title={obj.title} 
									// price={obj.price} 
									// image={obj.image}
									// sizes={obj.sizes}
									// types={obj.types}
									/>)
								)
							}

						</div>
					</div>
				</div>
			</div>


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
