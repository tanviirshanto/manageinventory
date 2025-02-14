import { connect } from "../../../dbConfig/dbConfig";
import Product from "../../../models/ProductModel";


async function getLowStockProducts() {
  try {
    // Connect to the database
    await connect();

    // Query to find products with stock less than 5
    const lowStockProducts = await Product.find({ stock: { $lt: 10 } });
  // console.log("Low stock products found:", lowStockProducts);
    // Return the low stock products or an empty array if none found
    return lowStockProducts;
  } catch (error) {
    console.error("Error fetching low stock products:", error);
    throw error;
  }
}

export default getLowStockProducts;
