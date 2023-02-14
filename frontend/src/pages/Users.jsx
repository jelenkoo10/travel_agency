import React, { useEffect, useState } from "react";
import { SessionService } from "../services/SessionService";
import axios from "axios";
import Navigation from "../components/Navigation";
import UserCard from "../components/AdminElements/UserCard";
import Button from "../components/FormElements/Button";
import { UserService } from "../services/UserService";
import UserAdd from "../components/AdminElements/UserAdd";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            const profile = SessionService.getProfile();
            const res = await axios.get(
                `http://127.0.0.1:8000/show/users/${profile[0].id}`
            );
            setUsers(res.data);
        };
        fetch();
    }, []);

    const displayed = users.map((user, i) => (
        <UserCard key={`${user.id}+${i}`} data={user} />
    ));

    const closeModal = () => {
        setModal(null);
    };

    const handleAdd = async (data) => {
        const response = await UserService.addUser(data);
    };

    return (
        <div className="relative">
            <Navigation />
            <div className="mt-[20px] mb-[4px] w-[30%] mx-auto">
                <Button onClick={() => setModal(true)}>Add user</Button>
            </div>
            <div className="grid grid-cols-4 gap-[1rem] p-[1rem]">
                {displayed}
            </div>
            {modal && (
                <div className="fixed z-10 w-[100%] h-[100%] flex justify-center items-center top-0 left-0">
                    <div
                        className="absolute z-[-1] bg-[#000] opacity-30 w-[100%] h-[100%] cursor-pointer"
                        onClick={() => setModal(false)}
                    ></div>
                    <UserAdd closeM={closeModal} />
                </div>
            )}
        </div>
    );
};

export default Users;
