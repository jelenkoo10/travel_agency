import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import check from "../assets/checked.png";
import { OfferService } from "../services/OfferService";

const Reservation = () => {
    const [reservations, setReservations] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [displayed, setDisplayed] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            const response = await OfferService.getReservations();
            setReservations(response);
        };
        fetch();
    }, [refresh]);

    const refreshPage = () => {
        setRefresh(!refresh);
    };

    const handleConfirm = async (id) => {
        const response = await OfferService.confirmReservations(id);
        if (response.status === 200) {
            setDisplayed(null);
            setReservations(null);
            refreshPage();
        }
    };

    if (reservations && !displayed) {
        const data = reservations.map((reservation, i) => (
            <tr
                className="mt-5 px-[10px] py-[16px] border-[#ddd] border-[1px] rounded-[15px] mb-[10px] text-center font-medium text-lg h-[50px]"
                key={i}
            >
                <td>{reservation.offer_id}</td>

                <td> {reservation.traveler_name}</td>
                <td>{reservation.traveler_surname}</td>
                <td>{reservation.phone_number}</td>
                <td>{reservation.email}</td>
                <td>{reservation.payment}</td>
                <td>{reservation.num_of_travelers}</td>
                <td>
                    {reservation.status === "1" ? (
                        "Confirmed"
                    ) : (
                        <button onClick={() => handleConfirm(reservation.id)}>
                            <img
                                src={check}
                                alt="checked"
                                className="w-[30px] h-[30px] mt-[10px]"
                            />
                        </button>
                    )}
                </td>
            </tr>
        ));
        setDisplayed(data);
    }

    return (
        <div>
            <Navigation />
            <table className="overflow-visible mt-[38px] mx-auto w-[90%]">
                <thead>
                    <tr className="px-[10px] py-[16px] text-center font-extrabold text-lg">
                        <th>offer_id</th>
                        <th>traveler_name</th>
                        <th>traveler_surname</th>
                        <th>phone_number</th>
                        <th>email</th>
                        <th>payment</th>
                        <th>num_of_travelers</th>
                        <th>status</th>
                    </tr>
                </thead>
                <tbody>{displayed}</tbody>
            </table>
        </div>
    );
};

export default Reservation;
