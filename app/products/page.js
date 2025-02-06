import { connect } from "../../dbConfig/dbConfig";
import Product from "../../models/ProductModel";
// import Header from "../../components/Products/Header";
import ProductTable from "../../components/Products/ProductTable";

connect();

async function GetAllProducts() {
  const products = await Product.find()
    .populate("category", "name icon")
    .lean();
  console.log(products); // Log to check if population works
  return products;
}


export default async function ProductsPage() {
  const products = await GetAllProducts();

  return (
    <div>
      <ProductTable products={JSON.stringify(products)} />
    </div>
  );
}
