export default function PriceInput({ buyingPrice, totalAmount, handleChange }) {
  return (
    <>
      <div className="flex flex-col gap-2 w-1/2">
        <label htmlFor="buyingPrice" className="font-semibold">
          Buying Price
        </label>
        <input
          type="number"
          name="buyingPrice"
          id="buyingPrice"
          value={buyingPrice}
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
    </>
  );
}
