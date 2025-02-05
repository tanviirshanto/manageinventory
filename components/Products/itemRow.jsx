import Image from "next/image";
import React from "react";

const ItemRow = () => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          id="example-checkbox"
          className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
      </td>
      <td>
        {" "}
        <Image
          src="/shirt.jpg"
          height={300}
          width={300}
          className="w-10 h-10"
        />
      </td>
      <td>T-shirt unisex white</td>
      <td>Active</td>
      <td>12 in stock</td>
      <td>T-shirt</td>
      <td>3 stores</td>
    </tr>
  );
};

export default ItemRow;
