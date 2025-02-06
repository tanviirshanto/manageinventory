import mongoose from "mongoose";
import Category from "./CategoryModel";
import Store from "./StoreModel";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    itemCode: {
      type: String,
      required: true,
      unique: true, // Ensures unique item codes
    },
    description: {
      type: String,
      default: "", // Optional field with a default value
    },
    stock: {
      type: Number,
      required: true,
      min: 0, // Stock cannot be negative
    },
    stores: [
      {
        type: mongoose.Schema.Types.ObjectId, // Array of Store references
        ref: "Store",
        required: true,
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
      min: 0, // Price cannot be negative
    },
    image: {
      type: String, // URL of the product image
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
