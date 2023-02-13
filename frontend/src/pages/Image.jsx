import React from "react";
import axios from "axios";

function Image() {
    const handleChange = (e) => {
        const file = e.target.files[0];
        //   const formData = new FormData();

        //   formData.append('image', file);
        const data = {
            offer_name: "Sunny Beach, March 2027, RAPSODY EXCLUSIVE!!",
            continent: "Europe",
            country: "Bulgaria",
            city: "Sunny Beach",
            departure_time: "2025-01-17 10:25:19",
            arrival_time: "2025-01-20 15:23:53",
            transport: "cruise",
            apartment: "toitoi",
            apartment_name: "Sweet Teen Hotel",
            accomodation: "1_1",
            stars: 1,
            price: 42,
            has_internet: 0,
            has_tv: 0,
            has_ac: 1,
            has_fridge: 0,
            destination_image: file,
        };
        axios.post("http://127.0.0.1:8000/offer", data).then(({ data }) => {
            console.log(data);
        });
    };
    return <input type="file" onChange={handleChange} />;
}

export default Image;
