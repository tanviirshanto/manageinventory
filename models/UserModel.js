import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8, // Enforces a minimum password length
    },
    store: {
      name: { type: String},
      code: { type: String},
      location: { type: String},
    },
    roles: {
      type: [String],
      enum: ["Manager", "Editor", "Supplier", "Seller", "Admin", "Finance"],
      required: true,
    },
    companySecret: {
      type: String,
    },
    permissions: {
      Customer: {
        view: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        create: { type: Boolean, default: false },
        approval: { type: Boolean, default: false },
      },
      Sales: {
        view: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        create: { type: Boolean, default: false },
        approval: { type: Boolean, default: false },
      },
      Products: {
        view: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        create: { type: Boolean, default: false },
        approval: { type: Boolean, default: false },
      },
      Category: {
        view: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        create: { type: Boolean, default: false },
        approval: { type: Boolean, default: false },
      },
      User: {
        view: { type: Boolean, default: false },
        edit: { type: Boolean, default: false },
        create: { type: Boolean, default: false },
        approval: { type: Boolean, default: false },
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;