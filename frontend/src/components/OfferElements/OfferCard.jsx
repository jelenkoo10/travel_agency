import React from "react";
import mapPin from "../../assets/mapPin.png";
import starIcon from "../../assets/star.png";

const OfferCard = ({ data }) => {
    const destination = data.offer_name.split(",");
    const ratingArray = Array.from(new Array(data.stars));
    const rating = ratingArray.map((_, i) => (
        <img
            key={`${data.id}+${i}`}
            src={starIcon}
            className="w-[20px] h-[20px]"
        />
    ));

    return (
        <div className="h-[250px] bg-[#f0f2f3] mb-[5px] cursor-pointer flex rounded-lg shadow-xl">
            <div className="w-[70%] h-[100%] flex justify-center items-center p-[1rem]">
                <img
                    src={`/cityImages/${data.city.toLowerCase()}.jpg`}
                    className="w-[100%] h-[100%]"
                />
            </div>
            <div className="w-[30%] py-[1rem] self-center">
                <div className="flex items-center gap-1">
                    <img src={mapPin} className="w-[7px] h-[9.55px]" />

                    <h2 className="text-xs uppercase tracking-wide">
                        {data.country}
                    </h2>
                </div>
                <h1 className="text-lg font-bold mb-1">{destination[0]}</h1>
                <h2 className=" font-semibold mb-1">
                    {data.apartment[0].toUpperCase() + data.apartment.substr(1)}
                </h2>
                <p className="mb-1">{destination[1]}</p>
                <p className="mb-1">{data.num_of_days.substr(1)}</p>
                <p className="font-bold mb-1">${data.price}</p>
                <p className="font-bold flex">{rating}</p>
            </div>
        </div>
    );
};

export default OfferCard;
