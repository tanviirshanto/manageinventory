"use client";
import Link from "next/link";
import React, { useState } from "react";
import DropdownFilter from "./filter";
import RowView from "./RowView";
import SearchBar from "./SearchBar";

const TableView = ({ items, headers, pageName }) => {
  const parsedItems = JSON.parse(items);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = parsedItems.filter((item) =>
    item?.product?.name
      ?.toLowerCase()
      .includes(searchQuery?.toLowerCase() || "")
  );

  return (
    <div>
      <div className="flex justify-between items-center bg-[#f3f3f3] p-10 gap-5  lg:flex-row flex-col ">
      <h1 className="text-2xl font-semibold">
          {pageName === "Stock Ins" ? "Stock Ins" : "Sales"}
        </h1>
        <div className="flex lg:flex-row flex-col gap-5 items-center">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <div className="flex gap-5">
            {/* <DropdownFilter /> */}
            <Link
              href={pageName === "Stock Ins" ? "/add_stockin" : "/add_sale"}
              className="text-white bg-purple-700 px-3 py-2 rounded-2xl"
            >
              {pageName === "Stock Ins" ? "+ Add Stock in" : "+ Add Sale"}
            </Link>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-screen lg:w-full border-collapse border border-gray-300 text-center ">
          <thead>
            <tr className="bg-gray-100 text-gray-500">
              {/* <th className="py-5 px-4">
                <input
                  type="checkbox"
                  id="select-all-checkbox"
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
              </th> */}
              {headers.map((header, index) => (
                <th key={index} className="py-5 px-4">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!filteredItems.length && <div>No data found.</div>}
            {filteredItems.map((item) => (
              <RowView key={item._id || Math.random()} parsedItem={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableView;
