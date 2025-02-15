"use client";
import axios from "axios";
import React, { useState } from "react";
import Permissions from "./permissions";

const CreateUserForm = () => {
  const roles = ["Manager", "Editor", "Supplier", "Seller", "Admin", "Finance","Viewer"];

  // State for name, email, password, roles, and loading
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  const [permissions, setPermissions] = useState({
    Customer: { view: false, edit: false, create: false, approval: false },
    Sales: { view: false, edit: false, create: false, approval: false },
    Products: { view: false, edit: false, create: false, approval: false },
    Category: { view: false, edit: false, create: false, approval: false },
    User: { view: false, edit: false, create: false, approval: false },
  });

  // Handle role selection
  const handleRoleChange = (role) => {
    setSelectedRoles((prevRoles) =>
      prevRoles.includes(role)
        ? prevRoles.filter((r) => r !== role)
        : [...prevRoles, role]
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/create_user", {
        name,
        email,
        password,
        roles: selectedRoles,
        permissions
      });
      alert("User created successfully!");
      // Clear form fields after success
      //   setName("");
      //   setEmail("");
      //   setPassword("");
      //   setSelectedRoles([]);
    } catch (error) {
      console.error("Error creating user:", error);
      alert("User creation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="bg-[#f3f3f3] p-10 rounded-xl shadow-md max-w-4xl mx-auto"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-bold mb-5">Create User</h1>
      {/* Name Input */}
      <div className="mb-5">
        <label htmlFor="name" className="block font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-3 rounded-lg border border-gray-300"
          placeholder="Enter user name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* Email Input */}
      <div className="mb-5">
        <label htmlFor="email" className="block font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-3 rounded-lg border border-gray-300"
          placeholder="Enter user email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* Password Input */}
      <div className="mb-5">
        <label htmlFor="password" className="block font-semibold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-3 rounded-lg border border-gray-300"
          placeholder="Enter user password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* Roles Selection */}
      <div className="mb-5">
        <h2 className="font-semibold mb-3">Assign Roles</h2>
        <div className="flex flex-wrap gap-3">
          {roles.map((role) => (
            <label key={role} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedRoles.includes(role)}
                onChange={() => handleRoleChange(role)}
                className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
              />
              {role}
            </label>
          ))}
        </div>
      </div>
      <Permissions permissions={permissions} setPermissions={setPermissions}  />
      {/* Submit Button */}
      <button
        type="submit"
        className="bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold w-full"
        disabled={loading}
      >
        {loading ? "Creating User..." : "Create User"}
      </button>
    </form>
  );
};

export default CreateUserForm;
