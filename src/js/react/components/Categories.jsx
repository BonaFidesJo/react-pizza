import React from "react";


const Categories = ({ value, onChangeCategory}) => {

	const categories = [
		'Все',
		'Мясные',
		'Гриль',
		'Острые',
		'Закрытые',
		'Без мяса',
	];


	return (

		<div className="nav-content__category category">
			<ul className="category__body">
				{
					categories.map((categoryName, index) =>
						<li
							key={index}
							onClick={() => onChangeCategory(index)}
							className={value === index ? "category__item _active" : "category__item"}>
							<span>{categoryName}</span>
						</li>
					)
				}

			</ul>
		</div>


	)
}


export default Categories;


