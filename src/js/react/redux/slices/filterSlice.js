import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchValue: '',
	categoryId: 0,
	currentPage: 1,
	sort: {
		name: 'популярности',
		sortProperty: 'rating'
	}
}


// Объект с нашими методами
const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		//Создание метода, т.е. создание функции/ свойства. и Когда она будет вызываться, они получит свой state

		setCategoryId(state, action) {
			// CСначала пишем какое значение нам менять  	state.categoryId 

			// и вставет вопрос какие значение нам передавать, т.к. мы получаем только стейет. Поэтому добавляем action. То есть мы хотим ихменить наш стейт. Т.е. при использовании диспатча, он получит стейт и действие

			// Само действие хранится не в самом экшене, а в экшен пейлоад

			// Любой экшен содержит в себе тип, т.е. название какой-либо команды.

			state.categoryId = action.payload;
		},
		setSort(state, action) {
			state.sort = action.payload;
		},
		setSearchValue(state, action) {
			state.searchValue = action.payload;
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload;
		},//И тут создаем новый метод длля ссылки
		setFilters(state, action) {
			state.currentPage = Number(action.payload.currentPage); //Вшивает текущуб страницу из пейлоада
			state.sort = action.payload.sort;
			state.categoryId = Number(action.payload.categoryId);
		}
	}
});

// Все методы можно вытащить тут из экшенс
// Мы вытаскиваем из объекта свойства (setCategoryId). преобразуем в константу, которую потом экспортируем
export const { setCategoryId, setSort, setCurrentPage, setFilters,setSearchValue  } = filterSlice.actions;

// По умолчанию экспортрируем редюсер
export default filterSlice.reducer;
