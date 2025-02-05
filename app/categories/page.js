import CategoryCard from '../../components/Categories/categorycard';
import Link from 'next/link';
import React from 'react'

import { FaShirt, FaBagShopping } from "react-icons/fa6";
import { PiPantsFill } from "react-icons/pi";
import { FaHatCowboy } from "react-icons/fa";
import { TbEyeglass2 } from "react-icons/tb";
import { GiConverseShoe } from "react-icons/gi";

import { connect } from "../../dbConfig/dbConfig";
import Category from "../../models/CategoryModel";

connect();

async function GetAllCategory() {
  const categories = await Category.find();
  return categories;
}

async function Categories() {

const categories = await GetAllCategory();
  
  return (
    <div>
      <div className="flex justify-between items-center bg-[#f3f3f3] px-10 py-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Categories</h1>
          <h2 className="text-sm text-gray-500">
            Last updated January 6,2025 at 1:56:20AM
          </h2>
        </div>
        <div className="flex gap-5 items-center">
          <Link
            href="/add_product"
            className="text-white bg-purple-800 px-3 py-2 rounded-2xl"
          >
            + Add Category
          </Link>
        </div>
      </div>
      
      <div className="px-10 py-5 flex flex-col gap-8">
        <div className="flex w-[80%] mx-auto justify-between flex-wrap">
          {!categories && <div>Loading...</div>}
          {categories?.map((category) => (
            <CategoryCard
              icon={<FaShirt />}
              name={category.name}
              quantity={category.quantity}
            />
          ))}
        </div>
        {/* <div className="flex w-[80%] mx-auto justify-between">
          <CategoryCard icon={<FaShirt />} name="T-shirts" quantity="12" />
          <CategoryCard icon={<PiPantsFill />} name="Jeans" quantity="16" />
          <CategoryCard
            icon={<TbEyeglass2 />}
            name="Accessories"
            quantity="20"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Categories