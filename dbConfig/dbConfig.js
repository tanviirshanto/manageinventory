import mongoose from "mongoose";

export async function connect() {
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error(
      "MongoDB Connection Error. Please make sure MongoDB is running.",
      error
    );
    process.exit(1); // Exit the process with an error code
  }

  mongoose.connection.on("error", (err) => {
    console.error("MongoDB Connection Error:", err);
  });
}
