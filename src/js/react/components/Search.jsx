
import React from "react";
import { SearchContext } from "../Index.jsx";




const Search = () => {

	const { searchValue, setSearchValue } = React.useContext(SearchContext)

	return (


		<div className="search">
			<div className="search__body">
				<img className="search__image" src="@img/header/search.svg" alt="Image" />
				<input
					placeholder="Поиск ..."
					type="text"
					className="search__input"

					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}

				/>
				{
					searchValue && (
						<img onClick={() => setSearchValue('')} className="search__close" src="@img/header/close.svg" alt="Image" />
					)
				}


			</div>
		</div>
	)
}

export default Search;


