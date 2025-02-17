import React from "react";


const Sort = () => {

	const [openPopup, setOpenPopup] = React.useState(false);

	const [activeSort, setActiveSort] = React.useState(0);

	const onClickListItem = (i) => {
		setActiveSort(i);
		setOpenPopup(false);

	}
	const list = [
		'популярности',
		'цене',
		'алфавиту'
	]
	const sortName = list[activeSort];





	return (
		<div className="nav-content__sort sort">
			<div onClick={() => setOpenPopup(!openPopup)} className="sort__label">
				<p> <img src="@img/sort.svg" alt="Image" /> Сортировка по:</p>
				<span>{sortName}</span>
			</div>
			{

				openPopup && (
					<div className="sort__popup">
						<ul className="sort__list">


							{list.map((name, i) =>
								<li
									key={i}
									onClick={() => onClickListItem(i)}
									className={activeSort === i ? "sort__item _active" : "sort__item"}>
									{name}
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


