"use client";
import React, { useState } from "react";

const AddCategoryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    icon: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/category/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Category added successfully!");
        setFormData({
          name: "",
          icon: "",
        });
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className="w-full px-10 py-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
        {/* Name and Item Code */}
        <div className="flex gap-14">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="name" className="font-semibold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
              required
            />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="itemCode" className="font-semibold">
              Icon
            </label>
            <input
              type="text"
              name="icon"
              id="icon"
              value={formData.icon}
              onChange={handleChange}
              className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#4b03a3] px-5 py-3 text-lg font-semibold text-white w-48 rounded-lg"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCategoryForm;
