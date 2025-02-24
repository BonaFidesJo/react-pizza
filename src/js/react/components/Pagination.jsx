
import React from "react";
import ReactPaginate from 'react-paginate';


const Pagination = ({onChangePage, currentPage}) => {
	return (
		<ReactPaginate
					className="pagination"
					breakLabel="..."
					nextLabel=">"
					previousLabel="<"
					onPageChange={(event) => onChangePage(event.selected+1)}
					pageRangeDisplayed={8}
					pageCount={3}
					forcePage={currentPage -1}
					renderOnZeroPageCount={null}
				/>
	)
}

export default Pagination;


