import { useState } from "react";
import arrow from "../assets/arrow.png";

function Pagination({
    currentPage,
    minPage,
    maxPage,
    totalPages,
    setCurrentPage,
    setMaxPage,
    setMinPage,
    showOffers,
    setShowOffers,
}) {
    const [perPage, setPerPage] = useState(showOffers);

    const incrementPage = () => {
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1);
        } else if (maxPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setMinPage(maxPage + 1);
            console.log(maxPage + 1);
            let count = 3;
            let countPage = maxPage;
            while (count > 0 && countPage < totalPages) {
                count = count - 1;
                countPage = countPage + 1;
            }
            setMaxPage(countPage);
        } else {
            alert("Nemate vise stranica!");
        }
    };

    const decrementPage = () => {
        if (currentPage > minPage) {
            setCurrentPage(currentPage - 1);
            console.log(minPage);
        } else if (minPage > 1) {
            setCurrentPage(currentPage - 1);
            setMinPage(minPage - 3);
            setMaxPage(minPage - 1);
        } else {
            alert("Na prvoj ste stranici!");
        }
    };

    const setClickedPage = (page) => {
        setCurrentPage(page);
    };

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const pageNumbers = pages.map((page) => {
        if (page <= maxPage && page >= minPage) {
            return (
                <div
                    key={page}
                    className={`w-[35px] h-[35px] border-[1px] border-[#ddd]  rounded-[4px] flex justify-center items-center mr-[5px] cursor-pointer ${
                        currentPage === page
                            ? "bg-black text-white"
                            : "bg-white"
                    }`}
                    onClick={() => setClickedPage(page)}
                >
                    {page}
                </div>
            );
        } else {
            return null;
        }
    });

    const handleChange = (e) => {
        setPerPage(e.target.value);
    };

    return (
        <div className="flex items-center justify-center relative">
            <img
                src={arrow}
                alt="arrow"
                className="rotate-180 w-[18px] h-[18px] cursor-pointer"
                onClick={() => decrementPage()}
            />
            {pageNumbers}

            <img
                src={arrow}
                alt="arrow"
                className="w-[18px] h-[18px] mr-[5px] cursor-pointer"
                onClick={() => incrementPage()}
            />
            <div className="absolute right-24">
                <form className="flex">
                    <label htmlFor="offers" className="font-bold text-lg">
                        Number of offers per page:
                    </label>
                    <select
                        id="offers"
                        name="offersnumber"
                        value={perPage}
                        onChange={handleChange}
                    >
                        <option value={50}>50</option>
                        <option value={25}>25</option>
                        <option value={100}>100</option>
                        <option value={200}>200</option>
                    </select>
                    <div
                        onClick={() => setShowOffers(perPage)}
                        className="ml-4 font-bold border-[1px] px-[8px] border-black text-lg cursor-pointer"
                    >
                        Confirm
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Pagination;
