
import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";
import { useSelector } from "react-redux";



const Header = () => {

	const {items, totalPrice } = useSelector(state => state.cart)

	return (
		<header className="header">
			<div className="header__container">
				<div className="header__body">

					<Link to="/" >
						<div className="header__logo logo">
							<img className="logo__img" src="@img/header/logo.svg" alt="Image" />
							<div className="logo__text">
								<div className="logo__text_title">REACT PIZZA</div>
								<div className="logo__text_subtitle">Cамая вкусная пицца во вселенной</div>
							</div>
						</div>
					</Link>

					<Link to="/cart">
						<div className="header__bar bar">
							<div className="bar__price">{totalPrice} ₽</div>
							<div className="bar__cart">
								<img className="bar__cart_img" src="@img/header/cart.svg" alt="cart" />
								<div className="bar__cart_count">{items.length}</div>
							</div>
						</div>
					</Link>
				</div>
				<Search />
			</div>
		</header>
	)
}

export default Header;


