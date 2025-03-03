
import React from "react";
// import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addItems, selectCartItemByID } from "../redux/slices/cartSlice.js";


const Card = ({ id, title, price, image, sizes, types }) => {

	const dispatch = useDispatch();
	const [activeType, setActiveType] = React.useState(0)
	const [activeSize, setActiveSize] = React.useState(0)
	const typeNames = ['тонкое', 'традиционное']
	const cartItem = useSelector(selectCartItemByID(id))

	//Делаем проверку на то, чтобы если в корзине нет ничего, то кол-во ноль. есди есть то отображается
	const addedCount = cartItem ? cartItem.count : 0;
	// const onClickType =(typeId) =>{
	// 	setActiveType(typeId)
	// }

	//Генерируем товар, который будм добавлять в корзину. Именно такой объект будет храниться в корзине, в редаксе
	const onClickAdd = () => {
		const item = {
			id,
			title,
			price,
			image,
			type: typeNames[activeType], //чтобы брал таймнеймс и называл в виде строчки
			size: sizes[activeSize],
		};
		//Вызвать диспатч и передать ему айтем
		dispatch(addItems(item))
	}



	// const onClickAddButton = () => {
	// 	setPizzaCount(pizzaCount + 1);
	// }


	return (
		<div className="card">
			<div className="card__image">
				<img src={image} alt="Image" />
			</div>
			<div className="card__name"><span>{title}</span></div>
			<div className="card__choice choice-bottom">
				<ul className="choice-bottom__list">

					{types.map((typeId) =>
						<li key={typeId}
							onClick={() => setActiveType(typeId)} className={activeType === typeId ? "choice-bottom__item _active" : "choice-bottom__item"}>
							{typeNames[typeId]}
						</li>)
					}


				</ul>


				<ul className="choice-bottom__list">
					{sizes.map((size, i) =>
						<li
							key={size}
							onClick={() => setActiveSize(i)}
							className={activeSize === i ? "choice-bottom__item _active" : "choice-bottom__item"}>
							{size} см.
						</li>)
					}
				</ul>

			</div>
			<div className="card__bottom">
				<div className="card__price">от {price} ₽</div>
				<button onClick={onClickAdd} className="card__button button-card">
					<div className="button-card__image">
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="#EB5A1E" />
						</svg>
					</div>

					<div className="button-card__text">Добавить</div>
					{
						addedCount > 0 && <div className="button-card__count"><span>{addedCount}</span></div>
					}


				</button>
			</div>
		</div>
	)
}

export default Card;


