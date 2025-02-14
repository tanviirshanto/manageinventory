
import Image from 'next/image';
import React from 'react'

const StoreCard = ({ store, storeDetails, setStoreDetails, selected, setSelected }) => {
  return (
    <div
      className={` lg:w-72 py-5 h-auto bg-[#f3f3f3] hover:bg-[#e5d5f8] shadow-lg rounded-lg cursor-pointer ${
        selected === store.location ? "bg-[#e5d5f8]" : ""
      }`}
      onClick={() => {
        setStoreDetails(store);
        setSelected(store.location);
      }}
    >
      <div className="flex justify-center">
        <Image
          src={store.image}
          height={500}
          width={500}
          className="w-56 h-40 rounded-xl shadow-lg p-5"
          alt={store.name}
        />
      </div>
      <h1 className="text-lg font-semibold pt-3 text-center">
        {store.location}
      </h1>
    </div>
  );
};

export default StoreCard