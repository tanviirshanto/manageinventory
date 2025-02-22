"use client";
import React, { useState } from "react";
import { MdOutlineEdit } from "react-icons/md";

const Roles = ({ roles, setRoles }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    if (roles.includes("Admin")) {
      setIsEditing((prev) => !prev);
    }
  };

  const handleRoleChange = (role) => {
    if (!isEditing) return; // Prevent state update unless in edit mode
    setRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  return (
    <div className="lg:w-1/2 bg-[#f3f3f3] rounded-xl p-5">
      <div className="text-xl font-semibold flex items-center gap-3">
        <h1 className="">Roles</h1>
        <button
          onClick={handleEditClick}
          disabled={!roles.includes("Admin")}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MdOutlineEdit />
        </button>
      </div>

      {["Manager", "Editor", "Supplier", "Seller", "Admin", "Finance","Viewer"].map(
        (role) => (
          <div key={role} className="flex items-center gap-5 mt-5 text-lg">
            <input
              type="checkbox"
              id={`role-${role}`}
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 "
              checked={roles.includes(role)}
              readOnly={!isEditing} // Ensures input is interactive but not editable unless isEditing is true
              suppressHydrationWarning={true} // Suppresses Next.js warning
              onChange={() => handleRoleChange(role)}
            />
            <label htmlFor={`role-${role}`}>{role}</label>
          </div>
        )
      )}
    </div>
  );
};

export default Roles;
