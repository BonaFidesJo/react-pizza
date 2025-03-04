
// import React from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";


// const FullPizza = () => {

// 	const { id } = useParams();
// 	const [pizza, setPizza] = React.useState();

// 	React.useEffect(async () => {
// 		async function fetchPizza() {
// 			try {
// 				const { data } = await axios.get('https://67b2e560bc0165def8cf0958.mockapi.io/items/' + id);
// 				setPizza(pizza);
// 			} catch (error) {
// 				alert('Ошибка при получении пиццы');
// 			}
// 		}
// 		fetchPizza();
// 	}, [])



// 	return (
// 		<div className="full-pizza">
// 			<div className="full-pizza__container">

// 				<div className="full-pizza__title">{pizza.title}</div>
// 				<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et cum omnis itaque autem, repudiandae tempore, ad ducimus consequatur amet, quisquam beatae dignissimos praesentium voluptas cumque deleniti atque unde suscipit tenetur.</p>
// 				<h4>250 руб</h4>
// 			</div>
// 		</div>
// 	)
// }

// export default FullPizza;


