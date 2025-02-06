import mongoose from "mongoose";
import Product from "./ProductModel";

const salesSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", // Reference to the Product model
      required: true,
    },
    quantitySold: {
      type: Number,
      required: true,
      min: 1, // At least one item must be sold
    },
    salePrice: {
      type: Number,
      required: true,
      min: 0, // Sale price cannot be negative
    },
    customerName: {
      type: String,
      default: "Walk-in", // Default value for anonymous customers
    },
    customerContact: {
      type: String,
      default: "", // Optional field for customer contact details
    },
    saleDate: {
      type: Date,
      default: Date.now, // Default to the current date
    },
    paymentMethod: {
      type: String,
      enum: ["Cash", "Credit Card", "Online", "Other"], // Restrict to specific payment methods
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

const Sale = mongoose.models.Sale || mongoose.model("Sale", salesSchema);

export default Sale;
