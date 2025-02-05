export default function DealerDetails({ dealerName, dealerContact, handleChange }) {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-2 w-1/2">
        <label htmlFor="dealerName" className="font-semibold">
          Dealer Name
        </label>
        <input
          type="text"
          name="dealerName"
          id="dealerName"
          value={dealerName}
          onChange={handleChange}
          className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-2 w-1/2">
        <label htmlFor="dealerContact" className="font-semibold">
          Dealer Contact
        </label>
        <input
          type="text"
          name="dealerContact"
          id="dealerContact"
          value={dealerContact}
          onChange={handleChange}
          className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
        />
      </div>
    </div>
  );
}
