import mongoose from "mongoose";

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
    location: {
      type: [String], // Array of store names/locations
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    currentPrice: {
      type: Number,
      required: true,
      min: 0, // Price cannot be negative
    },
    image: {
      type: String, // Array of image URLs
      required: true,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
