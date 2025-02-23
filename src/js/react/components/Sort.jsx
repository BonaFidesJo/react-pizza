import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import {setSort} from './../redux/slices/filterSlice.js'


const list = [
	{ name: 'популярности ↓', sortProperty: 'rating' },
	{ name: 'популярности ↑', sortProperty: '-rating' },
	{ name: 'цене ↓', sortProperty: 'price' },
	{ name: 'цене ↑ ', sortProperty: '-price' },
	{ name: 'алфавиту ↓', sortProperty: 'title' },
	{ name: 'алфавиту ↑', sortProperty: '-title' }
]


const Sort = () => {
	const dispatch = useDispatch();
	const sort = useSelector((state) => state.filter.sort)

	const [openPopup, setOpenPopup] = React.useState(false);

	const onClickListItem = (obj) => {
		dispatch(setSort(obj));
		setOpenPopup(false);

	}


	return (
		<div className="nav-content__sort sort">
			<div onClick={() => setOpenPopup(!openPopup)} className="sort__label">
				<p> <img src="@img/sort.svg" alt="Image" /> Сортировка по:</p>
				<span>{sort.name}</span>
			</div>
			{

				openPopup && (
					<div className="sort__popup">
						<ul className="sort__list">


							{list.map((obj, i) =>
								<li
									key={i}
									onClick={() => onClickListItem(obj)}
									className={sort.sortProperty === obj.sortProperty ? "sort__item _active" : "sort__item"}>
									{obj.name}
								</li>)
							}
						</ul>
					</div>
				)
			}


		</div>
	)
}

export default Sort;


