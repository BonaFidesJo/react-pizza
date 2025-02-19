
import React from "react";

import Categories from "./../components/Categories.jsx";
import Sort from "./../components/Sort.jsx";
import Card from "./../components/Card.jsx"
import Skeleton from "./../components/skeleton.jsx";



// import pizza from "./assets/pizza.json"

const Home = ({ searchValue }) => {

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

		// const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
		// const sortBy = sortType.sortProperty.replace('-', '');
		// const search = searchValue ? `&search=${searchValue}` : '';

		// fetch(
		// 	`https://67b2e560bc0165def8cf0958.mockapi.io/items?${categoryId > 0
		// 		? `category=${categoryId}`
		// 		: ''}&sortBy=${sortBy}&order=${order}${search}`

		// )

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
	}, [categoryId, sortType]);

	const pizzas = items

		.filter(obj => {
			if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
				return true;
			}

			return false;
		})

		.map((obj) =>
		(
			<Card
				key={obj.id}
				{...obj}
			/>))

	const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);


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
							? skeletons
							: pizzas
					}

				</div>
			</div>
		</>
	)
}

export default Home;


