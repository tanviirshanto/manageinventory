"use client";
import React from "react";

const LocationSelector = ({ stores, formData, setFormData }) => {
  // Handle selecting a store
  const handleSelect = (store) => {
    if (!formData.locationValue.some((s) => s._id === store._id)) {
      setFormData({
        ...formData,
        locationValue: [...formData.locationValue, store],
      });
    }
  };

  // Handle removing a selected store
  const handleRemove = (storeId) => {
    setFormData({
      ...formData,
      locationValue: formData.locationValue.filter(
        (store) => store._id !== storeId
      ),
    });
  };

  return (
    <div className="flex flex-col gap-2 w-1/2">
      <label htmlFor="locationValue" className="font-semibold">
        Location
      </label>
      {/* Dropdown */}
      <select
        className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
        onChange={(e) => {
          const store = stores.find((s) => s._id === e.target.value);
          if (store) handleSelect(store);
        }}
      >
        <option value="">Select a store</option>
        {stores.map((store) => (
          <option key={store._id} value={store._id}>
            {store.location}
          </option>
        ))}
      </select>

      {/* Selected Items */}
      <div className="mt-3 flex flex-wrap gap-2">
        {formData.locationValue.map((store) => (
          <div
            key={store._id}
            className="flex items-center bg-gray-200 px-3 py-1 rounded-full"
          >
            <span>{store.location}</span>
            <button
              className="ml-2 text-red-600"
              onClick={() => handleRemove(store._id)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSelector;
