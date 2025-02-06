import mongoose from "mongoose";

const storeSchema = new mongoose.Schema(
  {
    
    location: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      sparse: true, // Allows multiple null values
    },
    image: {
      type: String, // Array of image URLs
      required: true,
    },
  },
  { timestamps: true }
);

const Store = mongoose.models.Store || mongoose.model("Store", storeSchema);

export default Store;
