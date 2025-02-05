"use client";
import React, { useState } from "react";
import {
  CategorySelector,
  ProductSelector,
  QuantityInput,
  PriceInput,
  DealerDetails,
  PaymentMethodSelector,
  SubmitButton,
} from "../../components/AddStockIn/index";

export default function AddStockIn() {
  const [formData, setFormData] = useState({
    product_id: "",
    quantityBought: 0,
    buyingPrice: "",
    totalAmount: 0,
    dealerName: "",
    dealerContact: "",
    paymentMethod: "Cash",
  });

  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "quantityBought" || name === "buyingPrice") {
        updated.totalAmount = updated.quantityBought * updated.buyingPrice;
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
      const response = await fetch("/api/stockins/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert("Item added to the stcok successfully!");
        setFormData({
          product_id: "",
          quantityBought: 0,
          buyingPrice: "",
          totalAmount: 0,
          dealerName: "",
          dealerContact: "",
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
        <h1 className="text-2xl font-semibold">Add Stock in</h1>
      </div>

      <form onSubmit={handleSubmit} className="p-10 flex flex-col gap-8">
        <div className="flex gap-5 ">
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
        <div className="flex gap-5">
          <QuantityInput
            quantityBought={formData.quantityBought}
            handleChange={handleChange}
          />
          <PriceInput
            buyingPrice={formData.buyingPrice}
            totalAmount={formData.totalAmount}
            handleChange={handleChange}
          />
        </div>
        <div className="flex gap-5">
          <div className="w-2/3">
            {" "}
            <DealerDetails
              dealerName={formData.dealerName}
              dealerContact={formData.dealerContact}
              handleChange={handleChange}
            />
          </div>
          <div className="w-1/3">
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
