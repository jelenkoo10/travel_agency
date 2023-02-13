import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { Home } from "./pages/home";
import Offers from "./pages/Offers";
import AdminOffers from "./pages/AdminOffers";
import Image from "./pages/Image";

function App() {
    axios
        .post("http://127.0.0.1:8000/login", {
            email: "ray23@gmail.com",
            password: "test123",
        })
        .then((data) => {
            console.log(data);
            getRes();
        });

    const getRes = () => {
        // axios
        //     .post("http://127.0.0.1:8000/offer", {
        //         offer_name: "Sunny Beach, March 2027, RAPSODY EXCLUSIVE!!",
        //         continent: "Europe",
        //         country: "Bulgaria",
        //         city: "Sunny Beach",
        //         departure_time: "2025-01-17 10:25:19",
        //         arrival_time: "2025-01-20 15:23:53",
        //         num_of_days: "3 days",
        //         transport: "cruise",
        //         apartment: "toitoi",
        //         apartment_name: "Sweet Teen Hotel",
        //         accomodation: "1_1",
        //         stars: 1,
        //         price: 42,
        //         has_internet: 0,
        //         has_tv: 0,
        //         has_ac: 1,
        //         has_fridge: 0,
        //         destination_image: "storage/cityPhotos/edinburgh.jpg",
        //     })
        //     .then(({ data }) => {
        //         console.log(data);
        //     });
    };

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/adminOffers" element={<AdminOffers />} />
            <Route path="/image" element={<Image />} />
        </Routes>
    );
}

export default App;
