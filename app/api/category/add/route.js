import { connect } from "../../../../dbConfig/dbConfig";
import Category from "../../../../models/CategoryModel";

// Create a new category (API Route)
export const POST = async (request) => {
  try {
    // Connect to the database
    await connect();

    // Get the JSON data from the request body
    const { name, icon} = await request.json();

    // Check if all fields are present
    if (!name) {
      return new Response('Missing required fields', { status: 400 });
    }

    // Create a new category
    const newCategory = new Category({
      name,
      icon,
    });

    // Save the category to the database
    await newCategory.save();

    return new Response(JSON.stringify(newCategory), { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return new Response("Error creating category", { status: 500 });
  }
};
