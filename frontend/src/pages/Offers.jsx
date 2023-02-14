import React, { useEffect, useState } from "react";
import OfferCard from "../components/OfferElements/OfferCard";
import OfferDetails from "../components/OfferElements/OfferDetails";
import { OfferService } from "../services/OfferService";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Navigation from "../components/Navigation";

const Offers = () => {
    const [offers, setOffers] = useState([]);
    const [modal, setModal] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [minPage, setMinPage] = useState(1);
    const [showOffers, setShowOffers] = useState(50);
    const [maxPage, setMaxPage] = useState(3);
    const [totalPages, setTotalPages] = useState(1);
    const [displayedOffers, setDisplayedOffers] = useState([]);

    if (modal) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    const searchOffers = (data) => {
        setOffers(data);
    };

    const closeModal = () => {
        setModal(null);
    };

    useEffect(() => {
        const fetchOffers = async () => {
            const data = await OfferService.getAllOffers();
            setOffers(data);
            setTotalPages(Math.ceil(data.length / showOffers));
        };
        fetchOffers();
    }, []);

    useEffect(() => {
        setDisplayedOffers(
            offers.slice(
                (currentPage - 1) * showOffers,
                currentPage * showOffers
            )
        );
    }, [currentPage, showOffers, offers]);

    useEffect(() => {
        setTotalPages(Math.ceil(offers.length / showOffers));
    }, [showOffers, offers]);

    const offerCards = displayedOffers.map((data, i) => (
        <div onClick={() => setModal(data)} key={`${data.id}+${i}`}>
            <OfferCard data={data} />
        </div>
    ));
    const bgImage = `bg-[url('./assets/homeBg.jpg')]`;

    return (
        <div className="mb-[300px]">
            <Navigation />

            <div
                className={`grid grid-cols-1 lg:grid-cols-2 min-[1400px]:grid-cols-3 gap-[1rem] ${bgImage} absolute bg-center bg-contain  bg-[#c9c5c5] bg-blend-darken bg-repeat-space min-h-[95%] px-[20px] pt-[140px] w-[100%] pb-[80px]`}
            >
                <div className="w-[100%] absolute top-[10px]">
                    <Search searchOffers={searchOffers} />
                </div>
                {offerCards}
                <div className="w-full absolute bottom-[30px]">
                    <Pagination
                        currentPage={currentPage}
                        minPage={minPage}
                        maxPage={maxPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                        setMaxPage={setMaxPage}
                        setMinPage={setMinPage}
                    />
                </div>
            </div>
            {modal && (
                <div className="fixed z-10 w-[100%] h-[100%] flex justify-center items-center top-0 left-0">
                    <div
                        className="absolute z-[-1] bg-[#000] opacity-30 w-[100%] h-[100%] cursor-pointer"
                        onClick={() => setModal(null)}
                    ></div>
                    <OfferDetails offer={modal} closeM={closeModal} />
                </div>
            )}
        </div>
    );
};

export default Offers;
