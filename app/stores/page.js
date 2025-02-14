import DropdownFilter from '../../components/Products/filter';
import React from 'react'
import Link from 'next/link';
import StoreCard from "../../components/Stores/storeCard";
import StoreDetailsCard from "../../components/Stores/storeDetailsCard";
import { connect } from "../../dbConfig/dbConfig";
import Store from "../../models/StoreModel";
import StoreLayout from "../../components/Stores/StoreLayout";

connect()

async function GetAllStores() {
  const stores = await Store.find();
  return stores
}

async function Stores() {
  const stores = await GetAllStores();

  return (
    <div>
      <div className="flex justify-between items-center bg-[#f3f3f3] p-10 gap-5  lg:flex-row flex-col">
        <h1 className="text-2xl font-semibold">Stores</h1>
        <div className="flex lg:flex-row flex-col gap-5 items-center">
          
          {/* <DropdownFilter /> */}
          <Link
            href="/add/store"
            className="text-white bg-purple-700 px-3 py-2 rounded-2xl"
          >
            + Add Store
          </Link>
        </div>
      </div>
      <StoreLayout stores={JSON.stringify(stores)} />
    </div>
  );
}

export default Stores