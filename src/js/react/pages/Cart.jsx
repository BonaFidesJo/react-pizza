
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CartItem from "./../components/CartItem.jsx";
import CartEmpty from "../components/CartEmpty.jsx";
import { clearItem } from "../redux/slices/cartSlice.js";


const Cart = () => {
	const { items, totalPrice } = useSelector(selectCart);
	const dispatch = useDispatch();

	
	const totalCount = items.reduce((sum, item) => sum + item.count, 0);

	const onClickclear = () => {
		if (window.confirm('Очистить корзину?')) {
			dispatch(clearItem());
		}
	};

	//Условный рендер,( также как и тернарный оператор)
	if (!totalPrice) {
		return (<CartEmpty />)
	}

	return (
		<div className="cart">
			<div className="cart__top top-cart">
				<div className="top-cart__title">
					<img src="@img/cart/cart.svg" alt="Image" />
					<span>Корзина</span>
				</div>
				<button onClick={onClickclear} className="top-cart__clean">
					<img src="@img/cart/trash.svg" alt="Image" />
					<span>Очистить корзину</span>
				</button>
			</div>
			<div className="cart__body body-cart">
				<ul className="body-cart__content">


					{
						items.map(item => <CartItem key={item.id} {...item} />)
					}



				</ul>
			</div>
			<div className="cart__bottom bottom-cart">
				<div className="bottom-cart__qty">Всего пицц: <b>{totalCount} шт.</b></div>
				<div className="bottom-cart__price">Сумма заказа: <b>{totalPrice} ₽</b></div>
			</div>
			<div className="cart__buttons buttons-cart">
				<Link to="/">
					<button className="buttons-cart__back">
						<img src="@img/cart/arrow.svg" alt="Image" />
						<span>Вернуться назад</span>
					</button>
				</Link>
				<button className="buttons-cart__pay">
					<span>Оплатить сейчас</span>
				</button>
			</div>

		</div>
	)
}

export default Cart;


