import DropdownFilter from '../../components/Products/filter';
import React from 'react'
import Link from 'next/link';
import StoreCard from "../../components/Stores/storeCard";
import StoreDetailsCard from "../../components/Stores/storeDetailsCard"

function Stores() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center bg-[#f3f3f3] px-8 py-5">
        <h1 className="text-2xl font-semibold">Stores</h1>
        <div className="flex gap-5 items-center">
          <input
            type="text"
            placeholder="Search"
            className="bg-white w-64 rounded-2xl p-3"
          />
          <DropdownFilter />
          <Link
            href="/add_product"
            className="text-white bg-purple-700 px-3 py-2 rounded-2xl"
          >
            + Add store
          </Link>
        </div>
      </div>
      <div className="flex w-[80%]  mx-auto justify-between ">
        <StoreCard img="/shirt.jpg" name="Manchester, UK" />
        <StoreCard img="/shirt.jpg" name="Manchester, UK" />
        <StoreCard img="/shirt.jpg" name="Manchester, UK" />
      </div>
      <div className="mb-5 flex w-[80%] mt-2 mx-auto justify-between">
        <StoreDetailsCard />
      </div>
    </div>
  );
}

export default Stores