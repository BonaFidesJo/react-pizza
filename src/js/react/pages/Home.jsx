
import React from "react";

import Categories from "./../components/Categories.jsx";
import Sort from "./../components/Sort.jsx";
import Card from "./../components/Card.jsx"
import Skeleton from "./../components/skeleton.jsx";
import NotFound from "./NotFound.jsx";


// import pizza from "./assets/pizza.json"

const Home = () => {

	//Массим с пиццами
	let [items, setItems] = React.useState([]);

	const [isLoading, setIsLoading] = React.useState(true);

	//fetch запрос к тестовому апи
	React.useEffect(() => {
		fetch('https://67b2e560bc0165def8cf0958.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
	}, []);


	return (
		<>
			<div className="content__nav nav-content">
				<Categories></Categories>
				<Sort></Sort>
			</div>

			<div className="content__body">
				<div className="content__title">Все пиццы</div>
				{/* <NotFound></NotFound> */}
				<div className="content__card">
		

							{
								isLoading
									? ([...new Array(8)].map((_, index) => <Skeleton key={index} />))
									: items.map((obj) =>
									(
										<Card key={obj.id}
											{...obj}
											// title={obj.title}
											// price={obj.price}
											// image={obj.image}
											// sizes={obj.sizes}
											// types={obj.types}
											{...obj}
										/>)
									)
							}
					
				</div>
			</div>
		</>
	)
}

export default Home;


