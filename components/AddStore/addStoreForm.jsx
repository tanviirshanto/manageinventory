"use client";
import React from "react";

const AddStoreForm = () => {
  const [formData, setFormData] = useState({
    location: "",
    contactNumber: "",
    email: "",
    image:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/store/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Store added successfully!");
        setFormData({
          location: "",
          contactNumber: "",
          email: "",
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
            <label htmlFor="location" className="font-semibold">
              Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
              required
            />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
              required
            />
          </div>
        </div>

        <div className="flex gap-14">
          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="contactNumber" className="font-semibold">
              Contact Number
            </label>
            <input
              type="text"
              name="contactNumber"
              id="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
              required
            />
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="image" className="font-semibold">
              Email
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
            Add Store
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStoreForm;
