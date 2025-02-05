import mongoose from "mongoose";
import Product from "../../../../models/ProductModel";
import Stockin from "../../../../models/StockinsModel";

export async function POST(req) {
  try {
    const {
      product_id,
      quantityBought,
      buyingPrice,
      totalAmount,
      dealerName,
      dealerContact,
      paymentMethod,
    } = await req.json();

    if (!product_id || !quantityBought || !buyingPrice) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const existingProduct = await Product.findById(product_id);
    if (!existingProduct) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        status: 404,
      });
    }

   existingProduct.currentPrice =
     Math.round(
       ((existingProduct.stock * existingProduct.currentPrice +
         Number(buyingPrice) * Number(quantityBought)) /
         (existingProduct.stock + Number(quantityBought))) *
         100
     ) / 100;

    existingProduct.stock += Number(quantityBought);

    await existingProduct.save();

    const stockin = new Stockin({
      product: existingProduct._id,
      quantityBought,
      buyingPrice,
      totalAmount,
      dealerName,
      dealerContact,
      paymentMethod,
    });

    await stockin.save();

    return new Response(
      JSON.stringify({ message: "Stockin added successfully", stockin }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding the product in Stock:", error);
    return new Response(
      JSON.stringify({
        error: "An error occurred while adding the product in Stock",
      }),
      { status: 500 }
    );
  }
}
