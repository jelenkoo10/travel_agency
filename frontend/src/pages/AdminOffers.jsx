import React, { useEffect, useState } from "react";
import OfferCard from "../components/OfferElements/OfferCard";
import AdminOfferDetails from "../components/OfferElements/AdminOfferDetails";
import { OfferService } from "../services/OfferService";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Navigation from "../components/Navigation";
import Button from "../components/FormElements/Button";
import axios from "axios";

const AdminOffers = () => {
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

    const offerCards = displayedOffers.map((data) => (
        <div onClick={() => setModal(data)}>
            <OfferCard key={data.id} data={data} />
        </div>
    ));
    const bgImage = `bg-[url('./assets/homeBg.jpg')]`;

    const handleDodaja = async () => {
        const data = {
            offer_name: "Bagrdan 2027, Exclusive-Dont Miss",
            city: "Batocina",
            country: "Serbia",
            continent: "Europe",
            transport: "by foot",
            departure_time: "2025-11-23 15:24:14",
            arrival_time: "2025-11-23 15:24:24",
            apartment: "Bungalow",
            apartment_name: "Vila sky",
            accomodation: "1_2",
            stars: 1,
            price: 10,
            has_tv: 1,
            has_ac: 0,
            has_internet: 0,
            has_fridge: 0,
            destination_image: "destination image",
        };
        const response = await OfferService.addOffer(data);
        console.log(response);
    };

    // useEffect(async () => {
    //     const res = await axios.get("http://127.0.0.1:8000/show/users/1");
    //     console.log(res);
    // }, []);

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
                    <Button onClick={handleDodaja}>Add offer</Button>
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
                    <AdminOfferDetails offer={modal} closeM={closeModal} />
                </div>
            )}
        </div>
    );
};

export default AdminOffers;
