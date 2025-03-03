
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search.jsx";
import { useSelector } from "react-redux";
import { selectCart } from "../redux/slices/cartSlice.js";



const Header = () => {

	// const pathname = window.location.pathname;
	// console.log(pathname, window.location) По факту не работает, т.к. не происходит перерисовки
	const location = useLocation(); //В этом случае срабатфывает перерисовка
	console.log(location)

	const { items, totalPrice } = useSelector(selectCart);
	// const { items, totalPrice } = useSelector((state) => state.cart);
	const totalCount = items.reduce((sum, item) => sum + item.count, 0) // Берем из всех обхектов каунт, суммируем их

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
					{location.pathname !== '/cart' && (
						<Link to="/cart">
							<button className="header__bar bar">
								<div className="bar__price">{totalPrice} ₽</div>
								<div className="bar__cart">
									<img className="bar__cart_img" src="@img/header/cart.svg" alt="cart" />
									<div className="bar__cart_count">{totalCount}</div>
								</div>
							</button>
						</Link>
					)

					}
				</div>
				{location.pathname !== '/cart' && <Search />}

			</div>
		</header>
	)
}

export default Header;


