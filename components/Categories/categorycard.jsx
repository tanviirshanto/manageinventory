import React from 'react'
import { FaShirt } from 'react-icons/fa6';



const CategoryCard = ({icon,name, quantity}) => {
  return (
    <div className="p-5 w-1/3">
      <div className=" h-auto bg-[#f3f3f3] shadow-lg px-5 py-3">
        <div className="bg-[#e5d5f9] flex justify-center text-5xl h-24 items-center "><FaShirt/>
        </div>{" "}
        <h1 className="text-xl font-semibold py-3">{name}</h1>
        <h2 className="text-sm text-gray-400 ">{quantity} Items</h2>
      </div>
    </div>
  );
}

export default CategoryCard