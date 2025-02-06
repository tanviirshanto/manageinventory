import Category from "../../models/CategoryModel";
import AddProductForm from "../../components/AddProduct/addProductForm";

async function GetAllCategories() {
  const categories = await Category.find();
  return categories;
}

export default async function AddProduct() {
  const categories = await GetAllCategories();
  return (
    <div className="w-full">
      <div className="bg-[#f3f3f3] px-10 py-5 w-full">
        <h1 className="text-2xl font-semibold">Add Product</h1>
      </div>
      <AddProductForm categories={JSON.stringify(categories)} />
    </div>
  );
}
