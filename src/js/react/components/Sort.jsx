import React from "react";


const Sort = ({ value, onChangeSort }) => {

	const [openPopup, setOpenPopup] = React.useState(false);

	const onClickListItem = (i) => {
		onChangeSort(i);
		setOpenPopup(false);

	}
	const list = [
		{ name: 'популярности ↓', sortProperty: 'rating' },
		{ name: 'популярности ↑', sortProperty: '-rating' },
		{ name: 'цене ↓', sortProperty: 'price' },
		{ name: 'цене ↑ ', sortProperty: '-price' },
		{ name: 'алфавиту ↓', sortProperty: 'title' },
		{ name: 'алфавиту ↑', sortProperty: '-title' }
	]






	return (
		<div className="nav-content__sort sort">
			<div onClick={() => setOpenPopup(!openPopup)} className="sort__label">
				<p> <img src="@img/sort.svg" alt="Image" /> Сортировка по:</p>
				<span>{value.name}</span>
			</div>
			{

				openPopup && (
					<div className="sort__popup">
						<ul className="sort__list">


							{list.map((obj, i) =>
								<li
									key={i}
									onClick={() => onClickListItem(obj)}
									className={value.sortProperty === obj.sortProperty ? "sort__item _active" : "sort__item"}>
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


