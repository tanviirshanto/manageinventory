"use client";
import React from "react";
import { MdOutlineEdit } from "react-icons/md";

const Roles = ({ roles, setRoles }) => {
  // const handleRoleChange = (role) => {
  //   setRoles(
  //     (prev) =>
  //       prev.includes(role)
  //         ? prev.filter((r) => r !== role) // Remove if already selected
  //         : [...prev, role] // Add if not selected
  //   );
  // };

  return (
    <div className="lg:w-1/2 bg-[#f3f3f3] rounded-xl p-5">
      <div className="text-xl font-semibold flex items-center gap-3">
        <h1 className="">Roles</h1>
        <button
          disabled={!roles.includes("Admin")}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {" "}
          <MdOutlineEdit />
        </button>
      </div>
      {["Manager", "Editor", "Supplier", "Seller", "Admin", "Finance"].map(
        (role) => (
          <div key={role} className="flex items-center gap-5 mt-5 text-lg">
            <input
              type="checkbox"
              id={`role-${role}`}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              checked={roles.includes(role)}
              readOnly
              // onChange={() => handleRoleChange(role)}
            />
            <label htmlFor={`role-${role}`}>{role}</label>
          </div>
        )
      )}
    </div>
  );
};

export default Roles;
