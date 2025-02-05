// components/Products/Header.js
import React from "react";
import SearchBar from "./SearchBar";
import DropdownFilter from "./filter";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-[#f3f3f3] p-10">
      <h1 className="text-2xl font-semibold">Stock Ins</h1>
      <div className="flex gap-5 items-center">
        <SearchBar />
        <DropdownFilter />
        <Link
          href="/add_stockin"
          className="text-white bg-purple-700 px-3 py-2 rounded-2xl"
        >
          + Add Stock in
        </Link>
      </div>
    </div>
  );
};

export default Header;
