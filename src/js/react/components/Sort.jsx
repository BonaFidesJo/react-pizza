import React from "react";


const Sort = () => {
	return (
		<div className="nav-content__sort sort">
			<div className="sort__label">
				<p> <img src="@img/sort.svg" alt="Image" /> Сортировка по:</p>
				<span>популярности</span>
			</div>
			<div className="sort__popup">
				<ul className="sort__list">
					<li className="sort__item sort__item_active">популярности</li>
					<li className="sort__item">цене</li>
					<li className="sort__item">алфавиту</li>
				</ul>
			</div>
		</div>
	)
}

export default Sort;


