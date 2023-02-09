import React from "react";
import homeBg from "../assets/homeBg.jpg";

export const Home = () => {
    return (
        <div>
            <div>Navigacija</div>
            <div className="w-[100%] h-56">
                <img src={homeBg} className="h-full w-full object-cover" />
            </div>
        </div>
    );
};
