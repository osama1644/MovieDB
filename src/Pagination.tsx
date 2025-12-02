import React from "react";
import ReactPaginate from "react-paginate";
import { useMovies } from "./hooks";

function Pagination() {
  const { fetchData, numOfPages } = useMovies();
  const pageCount = numOfPages;

  function handlePageClick(e: { selected: number }) {
    fetchData(e.selected + 1);
  }

  return (
    <div className="flex py-5 justify-center bg-[#1D1D1D]">
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي >"
        previousLabel="< السابق"
        pageCount={pageCount}
        marginPagesDisplayed={0}  
        pageRangeDisplayed={3}    
        onPageChange={handlePageClick}
        renderOnZeroPageCount={null}
        containerClassName="flex gap-2 p-2 bg-gray-500 rounded"
        pageClassName="cursor-pointer text-black font-bold px-2 py-1 rounded transition"
        activeClassName="bg-gray-300"
        previousClassName="cursor-pointer text-black font-bold bg-gray-200 px-2 py-1 rounded transition hover:bg-gray-300"
        nextClassName="cursor-pointer text-black font-bold bg-gray-200 px-2 py-1 rounded transition hover:bg-gray-300"
        breakClassName="cursor-default text-black px-2"
      />
    </div>
  );
}

export default Pagination;
