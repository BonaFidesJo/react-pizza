
import React from "react";
import { SearchContext } from "../Index.jsx";
import debounce from "lodash.debounce";





const Search = () => {

	const [value, setValue] = React.useState('')

	const { setSearchValue } = React.useContext(SearchContext)

	const inputRef = React.useRef();

	const onClickClear = () => {
		setSearchValue('');
		setValue('');
		// document.querySelector('input').focus()
		inputRef.current.focus();
	}

	const updateSearchValue = React.useCallback(
		debounce((str) => {
			setSearchValue(str)
		}, 350),
		[] //Зависимость
	);

	const onChangeInput = (event) => {
		setValue(event.target.value)
		updateSearchValue(event.target.value)
	}

	return (


		<div className="search">
			<div className="search__body">
				<img className="search__image" src="@img/header/search.svg" alt="Image" />
				<input
					ref={inputRef}
					placeholder="Поиск ..."
					type="text"
					className="search__input"
					value={value}
					onChange={onChangeInput}

				/>
				{
					value && (
						<img onClick={onClickClear} className="search__close" src="@img/header/close.svg" alt="Image" />
					)
				}


			</div>
		</div>
	)
}

export default Search;


