import Product from "../../../../models/ProductModel"; // Adjust path as needed
import { connect } from "../../../../dbConfig/dbConfig"; // Adjust path as needed

export async function PUT(req) {
  await connect(); // Ensure DB connection

  try {
    const {
      itemCode,
      name,
      description,
      stockSize,
      storesAvailability,
      category,
      price,
      productPhotos,
    } = await req.json();

    // Validate required fields
    if (!itemCode) {
      return new Response(
        JSON.stringify({ error: "Item code is required to edit the product" }),
        { status: 400 }
      );
    }

    // Find product by itemCode (or use _id for a more unique approach)
    const product = await Product.findOne({ itemCode });

    if (!product) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }

    // Update product fields
    product.name = name || product.name;
    product.description = description || product.description;
    product.stock = stockSize || product.stock;
    product.location = storesAvailability || product.location;
    product.category = category || product.category;
    product.currentPrice = price || product.currentPrice;
    product.image = productPhotos || product.image;

    // Save updated product
    await product.save();

    return new Response(JSON.stringify({ success: true, data: product }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    return new Response(
      JSON.stringify({ error: "Server error while updating the product" }),
      { status: 500 }
    );
  }
}
