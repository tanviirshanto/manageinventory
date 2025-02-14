"use client";
import React, { useEffect, useState } from "react";
import StoreDetailsCard from "./storeDetailsCard";
import StoreCard from "./storeCard";

const StoreLayout = ({ stores }) => {
  const parsedStores = JSON.parse(stores);
  const [storeDetails, setStoreDetails] = useState(parsedStores[0]);
  const [selected, setSelected] = useState(parsedStores[0].location);
  return (
    <div>
      <div className="mx-3 lg:mb-10 mb-5 flex mt-5 lg:mt-2 lg:mx-auto justify-center">
        <StoreDetailsCard storeDetails={storeDetails} />
      </div>
      <div className="flex flex-wrap lg:flex-nowrap lg:w-[80%] mb-5 mx-auto justify-center gap-5 lg:justify-between ">
        {parsedStores.map((store) => (
          <StoreCard
            store={store}
            storeDetails={storeDetails}
            setStoreDetails={setStoreDetails}
            selected={selected}
            setSelected={setSelected}
            key={store._id}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreLayout;
