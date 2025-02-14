import React from 'react'
import { MdOutlineEdit } from "react-icons/md";

const Details = ({ userData }) => {
  return (
    <div className="flex flex-col gap-5 rounded-xl bg-[#e5d5f9] p-5 relative">
      <div className="absolute top-5 right-5 text-2xl">
        <button
          disabled={!userData.roles.includes("Admin")}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MdOutlineEdit />
        </button>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col gap-2 w-1/2">
          <h1 className="font-semibold">Name</h1>
          <h1>{userData.name}</h1>
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <h1 className="font-semibold">Store</h1>
          <h1>Leicester, UK</h1>
        </div>
      </div>

      <div className="flex w-full">
        <div className="flex flex-col gap-2 w-1/2 text-clip ">
          <h1 className="font-semibold">Company email</h1>
          <div className="w-[90%] lg:w-full overflow-hidden">
            {" "}
            <h1 className="">{userData.email}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <h1 className="font-semibold">Store code</h1>
          <h1>9k-5-6764-LEI</h1>
        </div>
      </div>

      <div className="flex w-full">
        <div className="flex flex-col gap-2 w-1/2">
          <h1 className="font-semibold">Company Secret</h1>
          <h1>*******************</h1>
        </div>
        <div className="flex flex-col gap-2 w-1/2">
          <h1 className="font-semibold">Role</h1>
          <h1>{userData.roles[0]}</h1>
        </div>
      </div>
    </div>
  );
};

export default Details