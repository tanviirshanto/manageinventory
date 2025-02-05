export default function QuantityInput({ quantityBought, handleChange }) {
  return (
    <div className="flex flex-col gap-2 w-1/2">
      <label htmlFor="quantityBought" className="font-semibold">
        Quantity Bought
      </label>
      <input
        type="number"
        name="quantityBought"
        id="quantityBought"
        value={quantityBought}
        onChange={handleChange}
        className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
        required
      />
    </div>
  );
}
