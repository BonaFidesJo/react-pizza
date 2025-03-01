
import React from "react";
import { Link } from "react-router-dom";



const CartEmpty = () => {



	return (
		<div className="empty-cart">
			<div className="empty-cart__body">
				<div className="empty-cart__title">Корзина пустая 😢</div>
				<div className="empty-cart__text">
					<p>Вероятней всего, вы не заказывали ещё пиццу.</p>
					<p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
				</div>
				<div className="empty-cart__image">
					<img src="@img/empty/hooman.png" alt="Image" />
				</div>
				<Link to="/">
				<button className="empty-cart__button">
					<span>Вернуться назад</span>
				</button>
			</Link>
			</div>
			
		</div>

	)
}

export default CartEmpty;


