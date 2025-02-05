import Product from "../../../../models/ProductModel"; // Adjust path as needed
import { connect } from "../../../../dbConfig/dbConfig"; // Adjust path as needed

export async function DELETE(req) {
  await connect(); // Ensure DB connection

  try {
    const { itemCode } = await req.json();

    // Validate required fields
    if (!itemCode) {
      return new Response(JSON.stringify({ error: "Missing itemCode field" }), {
        status: 400,
      });
    }

    // Delete the product
    const deletedProduct = await Product.findOneAndDelete({ itemCode });

    if (!deletedProduct) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Product deleted successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting product:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}
