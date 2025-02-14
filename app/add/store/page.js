import AddStoreForm from "../../../components/AddStore/addStoreForm";
import React from "react";

export default function AddStore() {
  return (
    <div className="w-full">
      <div className="bg-[#f3f3f3] px-10 py-5 w-full">
        <h1 className="text-2xl font-semibold">Add Product</h1>
      </div>
      <AddStoreForm />
    </div>
  );
}
