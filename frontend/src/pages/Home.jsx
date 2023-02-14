import React from "react";
import Navigation from "../components/Navigation";

export const Home = () => {
    // const bgImage = `bg-[url('./assets/homeBg.jpg')]`;
    const bgImage = `bg-[url('./assets/homeBgDark.jpg')]`;
    document.body.style.overflow = "hidden";

    return (
        <div className="w-[100%] max-h-[100%]">
            <Navigation />
            <div
                className={`${bgImage} absolute bg-center bg-cover bg-[#fffcfc] bg-blend-darken bg-no-repeat h-[100%] w-[100%]`}
            ></div>
        </div>
    );
};
