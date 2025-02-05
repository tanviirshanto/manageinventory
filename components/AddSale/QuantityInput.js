export default function QuantityInput({ quantitySold, handleChange }) {
  return (
    <div className="flex flex-col gap-2 w-full lg:w-1/2 ">
      <label htmlFor="quantitySold" className="font-semibold">
        Quantity Sold
      </label>
      <input
        type="number"
        name="quantitySold"
        id="quantitySold"
        value={quantitySold}
        onChange={handleChange}
        className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
        required
      />
    </div>
  );
}
