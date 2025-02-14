import Category from "../../models/CategoryModel";
import AddProductForm from "../../components/AddProduct/addProductForm";
import Store from "../../models/StoreModel";

async function GetAllCategories() {
  const categories = await Category.find();
  return categories;
}

async function GetAllStores() {
  const stores = await Store.find();
  console.log(stores)
  return stores;
}

export default async function AddProduct() {
  const categories = await GetAllCategories();
  const stores = await GetAllStores();

  return (
    <div className="w-full">
      <div className="bg-[#f3f3f3] px-10 py-5 w-full">
        <h1 className="text-2xl font-semibold">Add Product</h1>
      </div>
      <AddProductForm
        categories={JSON.stringify(categories)}
        stores={JSON.stringify(stores)}
      />
    </div>
  );
}
