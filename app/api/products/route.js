import Product from "../../../models/ProductModel";
import { connect } from "../../../dbConfig/dbConfig";

export async function GET(req) {
  try {
    await connect();

    // Parse query parameters
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");
    const _id = searchParams.get("_id");

    // Construct the query dynamically
    const query = {};
    if (category) query.category = category;
    if (_id) query._id = _id;

    // Check if query object is empty
    // if (Object.keys(query).length === 0) {
    //   return new Response(
    //     JSON.stringify({ error: "Provide _id or category" }),
    //     {
    //       status: 400,
    //     }
    //   );
    // }

    // Fetch products based on query
    const products = await Product.find(query);

    if (products.length === 0) {
      return new Response(JSON.stringify({ message: "No products found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
    });
  }
}
