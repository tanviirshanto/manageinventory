import Image from 'next/image';
import React from 'react'

const StoreDetailsCard = ({storeDetails}) => {
  return (
    <div className=" outline outline-2 p-5 outline-purple-600 flex flex-col gap-6 rounded-xl">
      <h1 className="text-xl font-semibold">{storeDetails.location}</h1>
      <div className='flex gap-5'>
        <div className="">
          <Image
            src={storeDetails.image}
            height={300}
            width={300}
            className="w-28 h-24 "
            alt={storeDetails.location}
          />
        </div>
        <div className="font-semibold flex flex-col gap-3 text-gray-500">
          <h1>Email: {storeDetails.email}</h1>
          <h1>Items: 308</h1>
          <h1>Contact Number: {storeDetails.contactNumber}</h1>
        </div>
      </div>
    </div>
  );
};

export default StoreDetailsCard