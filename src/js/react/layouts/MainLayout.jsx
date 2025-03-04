
import React from "react";
import Header from "./../components/Header.jsx"
import { Outlet } from "react-router-dom";


const MainLayout = () => {



	return (
		<main className="page">
			<Header />
			<div className="content">
				<div className="content__container">
					<Outlet />
				</div>
			</div>
		</main>
	)
}

export default MainLayout;


