// components/Products/ProductTable.js
import React from "react";
import SaleRow from "./SaleRow";

const SalesTable = ({ sales }) => {
  return (
    <div>
      
      <table className="w-full border-collapse border border-gray-300 text-center">
      <thead>
        <tr className="bg-gray-100 text-gray-500"><th className="py-5 px-4">
            <input
              type="checkbox"
              id="select-all-checkbox"
              className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
            />
          </th>
          {/* <th className="py-5 px-4">Image</th> */}
          <th className="py-5 px-4">Image</th>
          <th className="py-5 px-4">Name</th>
          <th className="py-5 px-4">Quantity Sold</th>
          <th className="py-5 px-4">Sale Price</th>
          {/* <th className="py-5 px-4">Sale Date</th> */}
          <th className="py-5 px-4">Total Amount</th>
          <th className="py-5 px-4">Payment Method</th>
          <th className="py-5 px-4">Date</th>
        </tr>
      </thead>
      <tbody>
        {!sales && <div>Loading...</div>}
        {sales?.map((sale) => (
          <SaleRow key={sale._id} sale={JSON.stringify(sale)} />
        ))}
      </tbody>
    </table>
    </div>
    
  );
};

export default SalesTable;
