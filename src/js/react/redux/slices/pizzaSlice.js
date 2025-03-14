import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"; //Импортируем аксос, т.к. мы делаем здесь запрос


//Импортировали функцию, которая позволит сделать асинхронный экшен

export const fetchPizzas = createAsyncThunk(
	'pizza/fetchPizzasStatus', async (params) => {
		const { order, sortBy, currentPage, categoryId } = params;
		const { data } = await axios
			.get(
				`https://67b2e560bc0165def8cf0958.mockapi.io/items?page=${currentPage}&limit=8&${categoryId !== null ? `category=${categoryId}` : ''}&sortBy=${sortBy}&order=${order}`
			);
		return data;
	}
);


const initialState = {
	items: [],
	status: 'loading', //loading, sucess, error

};


// Объект с нашими методами
const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		setItems(state, action) {
			state.items = action.payload;
		}
	},
	// extraReducers: builder => {
	// 	builder.addCase(fetchPizzas.fulfilled, (state, action) => {
	// 	  console.log(state)
	// 	})
	//  },

	extraReducers: (builder) => {
		builder
			.addCase(fetchPizzas.pending, (state) => {
				state.status = "loading";
				state.items = [];
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {

				state.items = action.payload;
				state.status = "success";

			})
			.addCase(fetchPizzas.rejected, (state) => {
				state.status = "error";
				state.items = [];
			})
	},

});

export const { setItems } = pizzaSlice.actions;

// По умолчанию экспортрируем редюсер
export default pizzaSlice.reducer;


// 	extraReducers: {
// 		[fetchPizzas.fulfilled]: (state, action) => {
// 	console.log(state)
// }
// 	}
