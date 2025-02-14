"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const RowView = ({ parsedItem }) => {

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      {/* <td className="py-4 px-4 text-center">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        />
      </td> */}
      <td className="py-4 px-4 flex justify-center">
        {parsedItem.product.image ? (
          <Image
            src={parsedItem.product.image}
            alt={parsedItem.product.name}
            height={300}
            width={300}
            className="w-10 h-10 rounded"
          />
        ) : (
          <span>Loading image...</span>
        )}
      </td>
      <td className="py-4 px-4">
        {parsedItem?.product?.name || "Loading name..."}
      </td>

      <td className="py-4 px-4">
        {parsedItem.quantityBought}
        {parsedItem.quantitySold}
      </td>
      <td className="py-4 px-4">
        {parsedItem.buyingPrice}
        {parsedItem.salePrice}
      </td>
      <td className="py-4 px-4">{parsedItem.totalAmount}</td>
      <td className="py-4 px-4">{parsedItem.paymentMethod}</td>
      <td className="py-4 px-4">
        {new Date(parsedItem.createdAt).toLocaleDateString()}
      </td>
    </tr>
  );
};

export default RowView;
