
import React from "react";


import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId } from './../redux/slices/filterSlice.js'

import Categories from "./../components/Categories.jsx";
import Sort from "./../components/Sort.jsx";
import Card from "./../components/Card.jsx"
import Skeleton from "./../components/skeleton.jsx";
import Pagination from "../components/Pagination.jsx";
import { SearchContext } from "../Index.jsx";



// import pizza from "./assets/pizza.json"

const Home = () => {
	//Указываем категори ИД, и передаем useSelector. И уже внутри этого хука вшит useContext
	//И с помощью этого хука, мы можем вытащить весь наш стейт(Стор), т.е. все наше хранилище
	// State будет функция state => и далее говорим, что их этого стейта мы хотим вытищить что-то определенное.state.filter.categoryId)


	const categoryId = useSelector((state) => state.filter.categoryId)
	const sortType = useSelector((state) => state.filter.sort.sortProperty)
	// их можно объединить в один
	// const { categoryId, sort } = useSelector((state) => state.filter)
	// const sortType = sort.sortProperty


	console.log('redux state', categoryId)

	const dispatch = useDispatch()


	const onChangeCategory = (id) => {
		console.log(id)
		dispatch(setCategoryId(id));
	}
	// Но таким образом мы просто получаем id/А теперь нам надо его передать в редакс. Для ээтого используем useDispatch . то есть создать функциобю диспатч, дай нам действие как мегафон.
	// useDispatch верни нам спец функциб которая есть в редаксе и помести ее в эту переменную dispatch

	// Далее идем в слайс и импортируем оттуда наш метод, который что-то меняет. и передаем его в диспатч





	const { searchValue } = React.useContext(SearchContext)

	//Массим с пиццами
	let [items, setItems] = React.useState([]);

	const [isLoading, setIsLoading] = React.useState(true);

	//Избавились от этого свойства, чтобы доставать его из редакс тулкита
	// const [categoryId, setCategoryId] = React.useState(0);

	const [currentPage, setCurrentPage] = React.useState(1);

	// const [sortType, setSortType] = React.useState({
	// 	name: 'популярности',
	// 	sortProperty: 'rating'
	// });

	//fetch запрос к тестовому апи
	React.useEffect(() => {
		setIsLoading(true);

		const order = sortType.includes('-') ? 'asc' : 'desc'
		const sortBy = sortType.replace('-', '')

		fetch(
			`https://67b2e560bc0165def8cf0958.mockapi.io/items?page=${currentPage}&limit=8&
			${categoryId > 0 ? `category=${categoryId}` : ''}
			&sortBy=${sortBy}&order=${order}`)
			.then((res) => {
				return res.json();
			})
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sortType, currentPage]);

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
					onChangeCategory={onChangeCategory}

				/>
				<Sort

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
				<Pagination
					onChangePage={(number) => setCurrentPage(number)}
				/>
			</div>
		</>
	)
}

export default Home;


