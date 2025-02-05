import Product from "../../../../models/ProductModel"; // Adjust path as needed
import { connect } from "../../../../dbConfig/dbConfig"; // Adjust path as needed

export async function POST(req) {
  await connect(); // Ensure DB connection

  try {
    const {
      name,
      itemCode,
      description,
      stock,
      locationValue,
      category,
      currentPrice,
      image,
    } = await req.json();

    // Validate required fields
    if (!name || !itemCode || !stock || !category || !currentPrice) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Convert location (comma-separated string) to an array
    const locationArray =locationValue
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);

      // Create new product
    const newProduct = await Product.create({
      name,
      itemCode,
      description,
      stock,
      location: locationArray,
      category,
      currentPrice,
      image,
    });

    return new Response(JSON.stringify({ success: true, data: newProduct }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
