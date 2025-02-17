import React from "react";


const Categories = () => {

	const [activeIndex, setActiveIndex] = React.useState(0);

	const categories = [
		'Все',
		'Мясные',
		'Гриль',
		'Острые',
		'Закрытые',
		'Без мяса',
	];

	const onCLickCategory = (index) => {
		setActiveIndex(index);
	}


	return (

		<div className="nav-content__category category">
			<ul className="category__body">
				{
					categories.map((value, index) =>
						<li 
							key={index}
							onClick={() => onCLickCategory(index)}
							className={activeIndex === index ? "category__item _active" : "category__item"}>
							<span>{value}</span>
						</li>
					)
				}

			</ul>
		</div>


	)
}


export default Categories;


