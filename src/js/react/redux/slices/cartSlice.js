import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	totalPrice: 0,
	items: []

}


// Объект с нашими методами
const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {

		addItems(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload.id);

			if (findItem) {
				findItem.count++
			} else {
				state.items.push({
					...action.payload, // если такого объекта еще нет в массиве, то берем этот объект и добавляем его. коунт - 1
					count: 1,
				});
			}
			state.totalPrice = state.items.reduce((sum, obj) => {
				return (obj.price * obj.count) + sum; //Умножаем цену за единицу на кол-во и прибавляем к предыдущей сумме
			}, 0)
		},

		minusItem(state, action) {
			const findItem = state.items.find(obj => obj.id === action.payload);
			if (findItem) {
				findItem.count--;
			}
		},

		removeItem(state, action) {
			state.items = state.items.filter((obj) => obj.id !== action.payload);
		},
		clearItem(state) {
			state.items = [];
			state.totalPrice = 0;
		}
	},
});

export const selectCart = (state) => state.cart;
export const selectCartItemByID = (id) => ((state) => state.cart.items.find((obj) => obj.id === id));

export const { addItems, removeItem, minusItem, clearItem } = cartSlice.actions;

// По умолчанию экспортрируем редюсер
export default cartSlice.reducer;
