"use client";
import React, { useState } from "react";
import {
  CategorySelector,
  ProductSelector,
  QuantityInput,
  PriceInput,
  CustomerDetails,
  PaymentMethodSelector,
  SubmitButton,
} from "../../components/AddSale/index";

export default function AddSale() {
  const [formData, setFormData] = useState({
    product_id: "",
    quantitySold: 0,
    salePrice: "",
    totalAmount: 0,
    customerName: "",
    customerContact: "",
    paymentMethod: "Cash",
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "quantitySold" || name === "salePrice") {
        updated.totalAmount = updated.quantitySold * updated.salePrice;
      }
      return updated;
    });
  };

  const handleCategoryChange = async (e) => {
    const { value } = e.target;
    setFormData({ ...formData, category: value });

    if (value) {
      try {
        const response = await fetch(`/api/products?category=${value}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const fetchedProducts = await response.json();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    } else {
      setProducts([]);
    }
  };

  const handleProductChange = (e) => {
    setFormData({ ...formData, product_id: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sales/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Sale added successfully!");
        setFormData({
          product_id: "",
          quantitySold: 0,
          salePrice: "",
          totalAmount: 0,
          customerName: "",
          customerContact: "",
          paymentMethod: "Cash",
        });
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <div className="w-full">
      <div className="bg-[#f3f3f3] px-10 py-5 w-full">
        <h1 className="text-2xl font-semibold">Add Sales</h1>
      </div>

      <form onSubmit={handleSubmit} className="p-10 flex flex-col gap-8 ">
        <div className="flex gap-5 flex-col lg:flex-row">
          <CategorySelector
            category={formData.category}
            handleCategoryChange={handleCategoryChange}
          />
          <ProductSelector
            products={products}
            product={formData.product_id}
            handleProductChange={handleProductChange}
          />
        </div>
        <div className="flex gap-5 flex-col lg:flex-row ">
          <QuantityInput
            quantitySold={formData.quantitySold}
            handleChange={handleChange}
          />
          <PriceInput
            salePrice={formData.salePrice}
            totalAmount={formData.totalAmount}
            handleChange={handleChange}
          />
        </div>
        <div className="flex  flex-col lg:flex-row  w-full gap-5">
          <div className="lg:w-2/3 w-full">
            {" "}
            <CustomerDetails
              customerName={formData.customerName}
              customerContact={formData.customerContact}
              handleChange={handleChange}
            />
          </div>
          <div className="lg:w-1/3 w-full">
            <PaymentMethodSelector
              paymentMethod={formData.paymentMethod}
              handleChange={handleChange}
            />
          </div>
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
