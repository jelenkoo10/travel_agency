import React from "react";
import user from "../../assets/user.png";

const UserCard = ({ data }) => {
    return (
        <div className="h-[250px] bg-[#f0f2f3] mb-[5px] cursor-pointer flex rounded-lg shadow-xl max-h-[210px]">
            <div className="w-[30%] h-[100%] flex justify-center items-center p-[1rem]">
                <img src={user} className="w-[100px] h-[100px]" />
            </div>
            <div className="w-[70%] py-[1rem] self-center">
                <h1 className="text-lg font-bold mb-1">
                    {data.name} {data.surname}
                </h1>
                <p className="mb-1">{data.email}</p>
                <p className="mb-1">{data.phone_number}</p>
                <p className="font-bold mb-1">
                    {data.role[0].toUpperCase() + data.role.substr(1)}
                </p>
            </div>
        </div>
    );
};

export default UserCard;
