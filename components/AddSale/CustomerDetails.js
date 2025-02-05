export default function CustomerDetails({
  customerName,
  customerContact,
  handleChange,
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
      <div className="flex flex-col gap-2 w-full lg:w-1/2 ">
        <label htmlFor="customerName" className="font-semibold">
          Customer Name
        </label>
        <input
          type="text"
          name="customerName"
          id="customerName"
          value={customerName}
          onChange={handleChange}
          className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-2 w-full lg:w-1/2">
        <label htmlFor="customerContact" className="font-semibold">
          Customer Contact
        </label>
        <input
          type="text"
          name="customerContact"
          id="customerContact"
          value={customerContact}
          onChange={handleChange}
          className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
        />
      </div>
    </div>
  );
}
