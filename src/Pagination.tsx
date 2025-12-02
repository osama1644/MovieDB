import ReactPaginate from "react-paginate";
import { useMovies } from "./hooks";

function Pagination() {
  const { fetchData, numOfPages } = useMovies();
  const pageCount = numOfPages;
  function handlePageClick(e: { selected: number }) {
    console.log(e.selected + 1);
    fetchData(e.selected + 1);
  }
  return (
    <>
      <div className="flex my-5 justify-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="التالي >"
          previousLabel="< السابق"
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          renderOnZeroPageCount={null}
          containerClassName="flex gap-2 p-2 bg-[#CBCBCC] rounded"
          pageClassName="cursor-pointer text-white font-bold  px-1 md:px-3 py-1 rounded transition"
          activeClassName="bg-[#1E1E1E]"
          previousClassName="cursor-pointer text-white font-bold bg-[#1e1e1e91] px-1 md:px-3 py-1 rounded transition hover:bg-[#1E1E1E]"
          nextClassName="cursor-pointer text-white font-bold bg-[#1e1e1e91] px-1 md:px-3 py-1 rounded transition hover:bg-[#1E1E1E]"
          breakClassName="cursor-default text-white px-2"
        />
      </div>
    </>
  );
}

export default Pagination;
