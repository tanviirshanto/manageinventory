import mongoose from "mongoose";
import Product from "../../../../models/ProductModel"; // Ensure the correct path to the Product model
import Sale from "../../../../models/SalesModel"; // Ensure you create a Sale model (provided earlier)

export async function POST(req) {
  try {
    // Parse the request body
    const {
      product_id,
      quantitySold,
        salePrice,
      totalAmount,
      customerName,
      customerContact,
      paymentMethod,
    } = await req.json();

    // Validate required fields
    if (!product_id || !quantitySold || !salePrice) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    // Find the product in the database
    const existingProduct = await Product.findById(product_id);

    if (!existingProduct) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }

    // Check if there's enough stock
    if (existingProduct.stock < quantitySold) {
      return new Response(
        JSON.stringify({
          error: `Not enough stock. Available: ${existingProduct.stock}`,
        }),
        { status: 400 }
      );
    }

    // Subtract the sold quantity from the stock
    existingProduct.stock -= Number(quantitySold);

    // Save the updated product
    await existingProduct.save();

    // Create a new sale document
    const sale = new Sale({
      product: existingProduct._id,
      quantitySold,
        salePrice,
      totalAmount,
      customerName,
      customerContact,
      paymentMethod,
    });

    // Save the sale to the database
    await sale.save();

    // Return success response
    return new Response(
      JSON.stringify({ message: "Sale added successfully", sale }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding sale:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred while adding the sale" }),
      { status: 500 }
    );
  }
}
