export default function PriceInput({ salePrice, totalAmount, handleChange }) {
  return (
    <div className="flex gap-2 lg:gap-5 w-full">
      <div className="flex flex-col gap-2 w-1/2">
        <label htmlFor="salePrice" className="font-semibold">
          Sale Price
        </label>
        <input
          type="number"
          name="salePrice"
          id="salePrice"
          value={salePrice}
          onChange={handleChange}
          className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
          required
        />
      </div>
      <div className="flex flex-col gap-2 w-1/2">
        <label htmlFor="totalAmount" className="font-semibold">
          Total Amount
        </label>
        <input
          type="number"
          name="totalAmount"
          id="totalAmount"
          value={totalAmount}
          readOnly
          className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
        />
      </div>
    </div>
  );
}
