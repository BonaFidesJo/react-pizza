
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

	const [categoryId, setCategoryId] = React.useState(0);
	const [sortType, setSortType] = React.useState({
		name: 'популярности',
		sortProperty: 'rating'
	});

	//fetch запрос к тестовому апи
	React.useEffect(() => {
		setIsLoading(true);

		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
		const sortBy = sortType.sortProperty.replace('-', '')

		fetch(
			`https://67b2e560bc0165def8cf0958.mockapi.io/items?${categoryId > 0 
			? `category=${categoryId}` 
			: ''}&sortBy=${sortBy}&order=${order}`)
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId,sortType]);


	return (
		<>
			<div className="content__nav nav-content">
				<Categories
					value={categoryId}
					onChangeCategory={(id) => setCategoryId(id)}

				/>
				<Sort 
				value={sortType}
				onChangeSort={(i) => setSortType(i)}
				
				
				/>
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


