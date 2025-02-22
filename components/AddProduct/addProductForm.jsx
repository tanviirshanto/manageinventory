"use client";

import React, { useState } from "react";
import LocationSelector from "./locationSelector";

const AddProductForm = ({ categories, stores }) => {
  const parsedCategories = JSON.parse(categories);
  const parsedStores = JSON.parse(stores);

  const [formData, setFormData] = useState({
    name: "",
    itemCode: "",
    description: "",
    stock: "",
    locationValue: [],
    category: "",
    currentPrice: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Product added successfully!");
        setFormData({
          name: "",
          itemCode: "",
          description: "",
          stock: "",
          locationValue: [],
          category: "",
          currentPrice: "",
          image: "",
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
              Item Code
            </label>
            <input
              type="text"
              name="itemCode"
              id="itemCode"
              value={formData.itemCode}
              onChange={handleChange}
              className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
              required
            />
          </div>
        </div>

        {/* Location and Category */}
        <div className="flex gap-14">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="category" className="font-semibold">
              Category
            </label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {parsedCategories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="locationValue" className="font-semibold">
              Location (Comma Separated)
            </label>
            <input
              type="text"
              name="locationValue"
              id="locationValue"
              value={formData.locationValue}
              onChange={handleChange}
              className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
              required
            />
          </div> */}
          <LocationSelector stores={parsedStores} formData={formData} setFormData={setFormData} />
        </div>

        {/* Current Price and stock */}
        <div className="flex gap-14">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="currentPrice" className="font-semibold">
              Current Price
            </label>
            <input
              type="number"
              name="currentPrice"
              id="currentPrice"
              value={formData.currentPrice}
              onChange={handleChange}
              className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="stock" className="font-semibold">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              id="stock"
              value={formData.stock}
              onChange={handleChange}
              className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
              required
            />
          </div>
        </div>

        {/* Description and Stock */}
        <div className="flex gap-14">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl h-32"
            />
          </div>
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="image" className="font-semibold">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              id="image"
              value={formData.image}
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
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
