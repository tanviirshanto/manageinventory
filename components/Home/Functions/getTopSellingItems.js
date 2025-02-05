import mongoose from "mongoose";
import { connect } from "../../../dbConfig/dbConfig";
import Sale from "../../../models/SalesModel";

async function getTopSellingItems() {
  try {
    // Ensure the database is connected
    connect();

    // Get the date 30 days ago
    const last30Days = new Date();
    last30Days.setDate(last30Days.getDate() - 30);

    // Aggregate sales data to find top-selling items in the last 30 days
    const topSellingItems = await Sale.aggregate([
      {
        $match: {
          saleDate: { $gte: last30Days }, // Filter sales in the last 30 days
        },
      },
      {
        $group: {
          _id: "$product", // Group by the product ID
          totalQuantitySold: { $sum: "$quantitySold" }, // Calculate total quantity sold
        },
      },
      {
        $sort: { totalQuantitySold: -1 }, // Sort by quantity sold in descending order
      },
      {
        $limit: 6, // Limit the results to top 6
      },
      {
        $lookup: {
          from: "products", // Reference the Product collection
          localField: "_id", // Match `_id` from the aggregation
          foreignField: "_id", // Match `_id` in the Product collection
          as: "productDetails", // Add product details
        },
      },
      {
        $unwind: "$productDetails", // Unwind the product details array
      },
      {
        $project: {
          _id: 0, // Exclude the `_id` field
          productName: "$productDetails.name",
          image: "$productDetails.image", // Include the product name
          totalQuantitySold: 1, // Include the total quantity sold
        },
      },
    ]);
    //   console.log(topSellingItems);

    return topSellingItems;
  } catch (error) {
    console.error("Error fetching top-selling items:", error);
    throw error;
  }
}

export default getTopSellingItems;
