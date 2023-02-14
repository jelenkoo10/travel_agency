import React, { useEffect, useState } from "react";
import logoDark from "../assets/logo-dark.png";
import LogIn from "./LogIn";
import userIcon from "../assets/user.png";
import { SessionService } from "../services/SessionService";
import { useLocation, useNavigate } from "react-router-dom";

function Navigation() {
    const [logged, setLogged] = useState(false);
    const [modal, setModal] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const location = useLocation();

    const { pathname } = location;

    const closeModal = () => {
        setModal(false);
    };

    const handleProfile = () => {
        navigate("/profile");
    };

    useEffect(() => {
        let session = SessionService.getSessionFromStorage();

        if (session) {
            setLogged(true);
            setUser(session);
        }
    }, []);

    return (
        <div className="h-[60px] flex px-[30px] w-full justify-between items-center bg-lightGreen shadow-md">
            <div className="ml-4">
                <img
                    src={logoDark}
                    alt="logo"
                    className="w-[100px] h-[50px] self-start"
                />
            </div>
            <div className="flex">
                {logged && (
                    <div>
                        <button
                            onClick={() => navigate("/adminOffers")}
                            className={`mr-4 ${
                                pathname === "/adminOffers"
                                    ? "text-black border-b-2 border-black"
                                    : "text-green"
                            }`}
                        >
                            Offers
                        </button>
                        <button
                            onClick={() => navigate("/reservations")}
                            className={`mr-4 ${
                                pathname === "/reservations"
                                    ? "text-black border-b-2 border-black"
                                    : "text-green"
                            }`}
                        >
                            Reservation
                        </button>
                    </div>
                )}
                {user
                    ? user[0].role === "admin" && (
                          <button
                              onClick={() => navigate("/users")}
                              className={`${
                                  pathname === "/users"
                                      ? "text-black border-b-2 border-black"
                                      : "text-green"
                              }`}
                          >
                              Users
                          </button>
                      )
                    : ""}
            </div>
            <div>
                {!logged ? (
                    <div>
                        <button
                            onClick={() => setModal(true)}
                            className="mr-4 px-3 py-1 border-green border-2"
                        >
                            Log in
                        </button>
                        <button
                            onClick={() => navigate("/offers")}
                            className="px-3 py-1 border-green border-2"
                        >
                            Guest
                        </button>
                    </div>
                ) : (
                    <button onClick={handleProfile}>
                        <img
                            src={userIcon}
                            alt="user"
                            className="w-[40px] h-[40px] self-start"
                        />
                    </button>
                )}
            </div>
            {modal && (
                <div className="fixed z-10 w-[100%] h-[100%] flex justify-center items-center top-0 left-0">
                    <div
                        className="absolute z-[-1] bg-[#000] opacity-30 w-[100%] h-[100%] cursor-pointer"
                        onClick={() => setModal(null)}
                    ></div>
                    <LogIn closeM={closeModal} />
                </div>
            )}
        </div>
    );
}

export default Navigation;
