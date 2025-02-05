

export default function CategorySelector({ category, handleCategoryChange }) {
  return (
    <div className="flex flex-col gap-2 w-full lg:w-1/3">
      <label htmlFor="category" className="font-semibold">
        Category
      </label>
      <select
        name="category"
        id="category"
        value={category}
        onChange={handleCategoryChange}
        className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
      >
        <option value="">Select</option>
        <option value="Electronics">Electronics</option>
        <option value="Fitness">Fitness</option>
        <option value="Kitchenware">Kitchenware</option>
        <option value="Other">Other</option>
      </select>
    </div>
  );
}
