import { connect } from "../../../../dbConfig/dbConfig";
import Store from "../../../../models/StoreModel";

// Create a new store (API Route)
export const POST = async (request) => {
  try {
    // Connect to the database
    await connect();

    // Get the JSON data from the request body
    const { location, contactNumber, email, image } = await request.json();

    // Check if all fields are present
    if (!location) {
      return new Response("Missing required fields", { status: 400 });
    }

    // Create a new store
    const newStore = new Store({
      location,
      contactNumber,
      email,
      image,
    });

    // Save the store to the database
    await newStore.save();

    return new Response(JSON.stringify(newStore), { status: 201 });
  } catch (error) {
    console.error("Error creating store:", error);
    return new Response("Error creating store", { status: 500 });
  }
};
