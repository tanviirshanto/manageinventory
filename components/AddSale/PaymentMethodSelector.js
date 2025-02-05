// components/PaymentMethodSelector.js
import React from "react";

const PaymentMethodSelector = ({ paymentMethod, handleChange }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <label htmlFor="paymentMethod" className="font-semibold">
        Payment Method
      </label>
      <select
        name="paymentMethod"
        id="paymentMethod"
        value={paymentMethod}
        onChange={handleChange}
        className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
      >
        <option value="Cash">Cash</option>
        <option value="Credit Card">Credit Card</option>
        <option value="Online">Online</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
};

export default PaymentMethodSelector;
