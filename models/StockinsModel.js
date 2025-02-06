import mongoose from "mongoose";
import Product from "./ProductModel";


const stockinsSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // Reference to the Product model
      required: true,
    },
    quantityBought: {
      type: Number,
      required: true,
      min: 1, // At least one item must be sold
    },
    buyingPrice: {
      type: Number,
      required: true,
      min: 0, // Stockin price cannot be negative
    },
    dealerName: {
      type: String,
      default: "Walk-in", // Default value for anonymous customers
    },
    dealerContact: {
      type: String,
      default: "", // Optional field for customer contact details
    },
    buyingDate: {
      type: Date,
      default: Date.now, // Default to the current date
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Credit Card", "Online", "Bank","Other"], // Restrict to specific payment methods
      default: "Cash",
    },
    totalAmount: {
      type: Number,
      required: true,
      min: 0, // Calculated as salePrice * quantitySold
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

const Stockin = mongoose.models.Stockin || mongoose.model("Stockin", stockinsSchema);

export default Stockin;
