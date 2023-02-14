import React, { useEffect, useState } from "react";
import { SessionService } from "../services/SessionService";
import axios from "axios";
import Navigation from "../components/Navigation";
import UserCard from "../components/AdminElements/UserCard";

const Users = () => {
    const [users, setUsers] = useState([]);

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

    return (
        <div>
            <Navigation />
            <div className="grid grid-cols-4 gap-[1rem] p-[1rem]">
                {displayed}
            </div>
        </div>
    );
};

export default Users;
