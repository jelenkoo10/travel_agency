import React, { useEffect, useState } from "react";
import { SessionService } from "../services/SessionService";
import axios from "axios";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const profile = SessionService.getProfile();
            const res = await axios.get(
                `http://127.0.0.1:8000/show/users/${profile[0].id}`
            );
            setUsers(res.data);
            console.log(res.data);
        };
        fetch();
    }, []);

    const displayed = users.map((user) => (
        <div className="w-[200px] h-[20px] mt-5">{user.name}</div>
    ));

    console.log(displayed);

    return <div>{displayed}</div>;
};

export default Users;
