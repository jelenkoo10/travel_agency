import React, { useEffect, useState } from "react";
import OfferCard from "../components/OfferElements/OfferCard";
import AdminOfferDetails from "../components/AdminElements/AdminOfferDetails";
import { OfferService } from "../services/OfferService";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Navigation from "../components/Navigation";
import Button from "../components/FormElements/Button";
import AdminOfferAdd from "../components/AdminElements/AdminOfferAdd";

const AdminOffers = () => {
    const [offers, setOffers] = useState([]);
    const [modal, setModal] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [minPage, setMinPage] = useState(1);
    const [showOffers, setShowOffers] = useState(50);
    const [maxPage, setMaxPage] = useState(3);
    const [totalPages, setTotalPages] = useState(1);
    const [displayedOffers, setDisplayedOffers] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [adding, setAdding] = useState(false);

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

    const abortAdding = () => {
        setAdding(false);
    };

    useEffect(() => {
        const fetchOffers = async () => {
            const data = await OfferService.getAllOffers();
            setOffers(data);
            setTotalPages(Math.ceil(data.length / showOffers));
        };
        fetchOffers();
    }, [refresh]);

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

    const refreshPage = () => {
        setRefresh(!refresh);
    };

    const offerCards = displayedOffers.map((data) => (
        <div onClick={() => setModal(data)}>
            <OfferCard key={data.id} data={data} />
        </div>
    ));
    const bgImage = `bg-[url('./assets/homeBg.jpg')]`;

    const handleDodaja = async (data) => {
        const response = await OfferService.addOffer(data);
        if (response.status === 200) {
            refreshPage();
            setAdding(false);
        }
        console.log(response);
    };

    return (
        <div className="mb-[300px]">
            <Navigation />
            <div
                className={`grid grid-cols-1 lg:grid-cols-2 min-[1400px]:grid-cols-3 gap-[1rem] ${bgImage} absolute bg-center bg-contain  bg-[#c9c5c5] bg-blend-darken bg-repeat-space min-h-[95%] px-[20px] pt-[218px] w-[100%] pb-[80px]`}
            >
                <div className="w-[100%] absolute top-[20px]">
                    <Search searchOffers={searchOffers} />
                </div>
                <div className="w-[30%] absolute top-[150px] left-[35%]">
                    <Button onClick={() => setAdding(true)}>Add offer</Button>
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
                    <AdminOfferDetails
                        offer={modal}
                        closeM={closeModal}
                        refreshPage={refreshPage}
                    />
                </div>
            )}
            {adding && (
                <div className="fixed z-10 w-[100%] h-[100%] flex justify-center items-center top-0 left-0">
                    <div
                        className="absolute z-[-1] bg-[#000] opacity-30 w-[100%] h-[100%] cursor-pointer"
                        onClick={() => setModal(null)}
                    ></div>
                    <AdminOfferAdd
                        toogle={abortAdding}
                        refreshPage={refreshPage}
                        add={handleDodaja}
                    />
                </div>
            )}
        </div>
    );
};

export default AdminOffers;
