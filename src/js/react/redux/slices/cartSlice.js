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
			state.items.push(action.payload);
			//чтобы считалась сумма
			state.totalPrice = state.items.reduce((sum, obj) => {
				return obj.price + sum;
			}, 0)
		},
		removeItem(state, action) {
			state.items = state.items.filter((obj) => obj.id !== action.payload);
		},
		clearItem(state) {
			state.items = [];
		}
	},
});

export const { addItems, removeItem, clearItem } = cartSlice.actions;

// По умолчанию экспортрируем редюсер
export default cartSlice.reducer;
