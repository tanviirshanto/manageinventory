import Image from 'next/image';
import React from 'react'

const StoreCard = ({ img, name }) => {
  return (
    <div className="w-72 h-auto bg-[#f3f3f3] hover:bg-[#e5d5f8] shadow-lg p-5">
      <div className="flex justify-center">
        <Image
          src={img}
          height={500}
          width={500}
          className="w-56 h-40 rounded-xl shadow-lg "
        />{" "}
      </div>
      <h1 className="text-lg font-semibold px-3 py-3">{name}</h1>
    </div>
  );
};

export default StoreCard