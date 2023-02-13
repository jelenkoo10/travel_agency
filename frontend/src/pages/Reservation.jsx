import React, { useEffect, useState } from "react";
import { SessionService } from "../services/SessionService";
import axios from "axios";

const Reservation = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const profile = SessionService.getProfile();
            const res = await axios.get(`http://127.0.0.1:8000/reservations`);
            setReservations(res.data);
            console.log(res.data);
        };
        fetch();
    }, []);

    const displayed = reservations.map((reservation) => (
        <div className="w-[200px] h-[20px] mt-5">
            {reservation.traveler_name}
        </div>
    ));

    console.log(displayed);

    return <div>{displayed}</div>;
};

export default Reservation;
