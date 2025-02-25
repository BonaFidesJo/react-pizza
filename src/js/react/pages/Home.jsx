
import React from "react";
import axios from "axios";

import qs from 'qs';

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId, setCurrentPage, setFilters } from './../redux/slices/filterSlice.js'

import Categories from "./../components/Categories.jsx";
import Sort from "./../components/Sort.jsx";
import Card from "./../components/Card.jsx"
import Skeleton from "./../components/skeleton.jsx";
import Pagination from "../components/Pagination.jsx";
import { SearchContext } from "../Index.jsx";

import { list } from "./../components/Sort.jsx";

// import pizza from "./assets/pizza.json"

const Home = () => {
	const fetchPizzas =(() => {
		setIsLoading(true);
		const order = sortType.includes('-') ? 'asc' : 'desc'
		const sortBy = sortType.replace('-', '')
		//fetch запрос к тестовому апи
		// 	fetch(
		axios.get(`https://67b2e560bc0165def8cf0958.mockapi.io/items?page=${currentPage}&limit=8&
			${categoryId > 0 ? `category=${categoryId}` : ''}
			&sortBy=${sortBy}&order=${order}`)
			.then(response => {
				setItems(response.data);
				setIsLoading(false);
			})

		window.scrollTo(0, 0);
})

	const isMounted = React.useRef(false);
	//Указываем категори ИД, и передаем useSelector. И уже внутри этого хука вшит useContext
	//И с помощью этого хука, мы можем вытащить весь наш стейт(Стор), т.е. все наше хранилище
	// State будет функция state => и далее говорим, что их этого стейта мы хотим вытищить что-то определенное.state.filter.categoryId)
	const categoryId = useSelector((state) => state.filter.categoryId)
	const sortType = useSelector((state) => state.filter.sort.sortProperty)
	const currentPage = useSelector((state) => state.filter.currentPage)
	// их можно объединить в один
	// const { categoryId, sort } = useSelector((state) => state.filter)
	// const sortType = sort.sortProperty
	const dispatch = useDispatch()

	const onChangeCategory = (id) => {
		dispatch(setCategoryId(id));
	}
	// Но таким образом мы просто получаем id/А теперь нам надо его передать в редакс. Для ээтого используем useDispatch . то есть создать функциобю диспатч, дай нам действие как мегафон.
	// useDispatch верни нам спец функциб которая есть в редаксе и помести ее в эту переменную dispatch

	// Далее идем в слайс и импортируем оттуда наш метод, который что-то меняет. и передаем его в диспатч

	const onChangePage = (number) => {
		dispatch(setCurrentPage(number))
	}
	const { searchValue } = React.useContext(SearchContext)
	//Массим с пиццами
	let [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	//Избавились от этого свойства, чтобы доставать его из редакс тулкита
	// const [categoryId, setCategoryId] = React.useState(0);

	// const [currentPage, setCurrentPage] = React.useState(1);


	// const [sortType, setSortType] = React.useState({
	// 	name: 'популярности',
	// 	sortProperty: 'rating'
	// });

	//Делаем ссылку уникальной
	const navigate = useNavigate();

	const isSearch = React.useRef(false);


	// До получения пицц мы будем првоерять есть ли в урл эти параметры. Чтобы вытащить параемтры модно 2 способамию В реакт роутер Домю гыу ыурс рамс. А мы будем использовать window.location.search

	//Чтобы убрать вопросительный знак, который нельзя туда передавать дулаем substring(1)

	//Делаем отдульную функцию чтобы она не валялась в юз эффекте
	
console.log(isMounted)

React.useEffect(() => {
	if (isMounted.current) {
		const queryString = qs.stringify({
			sortProperty: sortType,
			categoryId,
			currentPage
		});
		navigate(`?${queryString}`);
	}
	isMounted.current = true;
}, [categoryId, sortType, currentPage]);


	
// если был первыц рендер, то проверяем урл и сохраняем в редукс.
React.useEffect(() => {
	if (window.location.search) {
		const params = qs.parse(window.location.search.substring(1));
		console.log(params) //Эти полученные параметры нужно передать в Редаксю Для этого идем в филтер слайс
		const sort = list.find((obj) => obj.sortProperty === params.sortProperty)

		dispatch(
			setFilters({
				...params,
				sort,
			})
		);
		isSearch.current = true;
	}
}, [])


	
	
	React.useEffect(() => {
		if (!isSearch.current) {
			fetchPizzas()
		}
		isSearch.current = false;

	}, [categoryId, sortType, searchValue, currentPage]);


	

	const pizzas = items.filter(obj => {
		if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
			return true;
		} return false;
	}).map((obj) =>
		(<Card key={obj.id} {...obj} />))

	const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);


	return (
		<>
			<div className="content__nav nav-content">
				<Categories value={categoryId} onChangeCategory={onChangeCategory} />
				<Sort />
			</div>

			<div className="content__body">
				<div className="content__title">Все пиццы</div>
				{/* <NotFound></NotFound> */}
				<div className="content__card">
					{isLoading ? skeletons : pizzas}
				</div>
				<Pagination
					currentPage={currentPage}
					onChangePage={onChangePage}
				/>
			</div>
		</>
	)
}

export default Home;

//fetch запрос к тестовому апи
// 	fetch(
// 		`https://67b2e560bc0165def8cf0958.mockapi.io/items?page=${currentPage}&limit=8&
// 		${categoryId > 0 ? `category=${categoryId}` : ''}
// 		&sortBy=${sortBy}&order=${order}`)
// 		.then((res) => {
// 			return res.json();
// 		})
// 		.then((arr) => {
// 			setItems(arr);
// 			setIsLoading(false);
// 		});
// 	window.scrollTo(0, 0);
// }, [categoryId, sortType, currentPage]);