"use client";
import Link from "next/link";
import React, { useState } from "react";
import SearchBar from "../Common/SearchBar";
import DropdownFilter from "./filter";
import ProductRow from "./ProductRow";


const ProductTable = ({ products }) => {
  const parsedProducts = JSON.parse(products);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = parsedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center bg-[#f3f3f3] p-10 gap-5  lg:flex-row flex-col">
        <h1 className="text-2xl font-semibold">Products</h1>
        <div className="flex lg:flex-row flex-col gap-5 items-center">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <DropdownFilter />
          <Link
            href="/add_product"
            className="text-white bg-purple-700 px-3 py-2 rounded-2xl"
          >
            + Add product
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-100 text-gray-500">
              <th className="py-5 px-4">
                <input
                  type="checkbox"
                  id="select-all-checkbox"
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
              </th>
              <th className="py-5 px-4">Image</th>
              <th className="py-5 px-4">Item Code</th>
              <th className="py-5 px-4">Name of Product</th>
              <th className="py-5 px-4">Buying Price</th>
              <th className="py-5 px-4">Stock Info</th>
              <th className="py-5 px-4">Category</th>
              <th className="py-5 px-4">Location</th>
            </tr>
          </thead>
          <tbody>
            {!products && <div>Loading...</div>}
            {filteredProducts?.map((product) => (
              <ProductRow key={product.itemCode} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
