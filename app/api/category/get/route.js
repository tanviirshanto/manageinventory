import { connect } from "../../../../dbConfig/dbConfig";
import Category from "../../../../models/CategoryModel";

// Get all categories
export const GET = async () => {
  try {
    await connect();
    const categories = await Category.find();
    return new Response(JSON.stringify(categories), { status: 200 });
  } catch (error) {
    return new Response("Error fetching categories", { status: 500 });
  }
};
