import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Paginacion() {
    const {handlePageChange, currentPage} = useContext(Context)
    return (
    <div className="flex justify-center my-8">
          <button
            className="bg-green-500 p-2 rounded-sm font-semibold text-white mx-6 hover:bg-green-600"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous Page
          </button>
          <button
            className="bg-green-500 p-2 rounded-sm font-semibold text-white hover:bg-green-600"
            onClick={() => {
              handlePageChange(currentPage + 1);
            }}
          >
            Next Page
          </button>
          <p className="bg-red-500 p-2 rounded-md mx-3 text-white font-semibold">
            {currentPage}
          </p>
    </div>
  )
}
