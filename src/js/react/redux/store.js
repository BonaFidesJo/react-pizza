import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice.js'
import cart from './slices/cartSlice.js'
import pizza from './slices/pizzaSlice.js'
// import { fetchPizzas } from './slices/pizzaSlice.js'


export const store = configureStore({
	reducer: {
		// Поместили в наше хранилище Редакса первый наш слайс
		filter,
		cart,
		pizza,
	},

})
