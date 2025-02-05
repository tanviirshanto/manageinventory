export default function ProductSelector({
  products,
  product,
  handleProductChange,
}) {
  return (
    <div className="flex flex-col gap-2 w-full lg:w-2/3">
      <label htmlFor="product" className="font-semibold">
        Product (ID)
      </label>
      <select
        name="product"
        id="product"
        value={product}
        onChange={handleProductChange}
        className="bg-[#f3f3f3] px-5 py-3 border border-gray-300 rounded-xl"
      >
        <option value="">Select</option>
        {products.map((product) => (
          <option key={product._id} value={product._id}>
            {product.name} ({product.stock} in stock)
          </option>
        ))}
      </select>
    </div>
  );
}
