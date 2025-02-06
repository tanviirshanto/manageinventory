
import React from "react";
import Image from "next/image";

const ProductRow = ({ product }) => {
  return (
    <tr
      className="border-b border-gray-200 hover:bg-gray-50"
      key={product.itemCode}
    >
      <td className="py-4 px-4 text-center">
        <input
          type="checkbox"
          id="example-checkbox"
          className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        />
      </td>
      <td className="py-4 px-4 flex justify-center">
        <Image
          src={product.image}
          alt={product.name}
          height={300}
          width={300}
          className="w-10 h-10 rounded"
        />
      </td>
      <td className="py-4 px-4">{product.itemCode}</td>
      <td className="py-4 px-4">{product.name}</td>
      <td className="py-4 px-4">{product.currentPrice} $</td>
      <td className="py-4 px-4">{product.stock} in stock</td>
      <td className="py-4 px-4">{product.category.name}</td>
      <td className="py-4 px-4">
        {Array.isArray(product.location)
          ? `${product.location.length} stores`
          : "No stores available"}
      </td>
    </tr>
  );
};

export default ProductRow;
