import Product from "../../../models/ProductModel";

async function getStockPerLocation() {
  try {
    const stockByLocation = await Product.aggregate([
      { $unwind: "$location" }, // Break down the array of locations into separate documents
      {
        $project: {
          location: 1, // Include the location
          stock: { $divide: ["$stock", { $size: "$location" }] }, // Divide stock by the number of locations
        },
      },
      {
        $group: {
          _id: "$location", // Group by location
          totalStock: { $sum: "$stock" }, // Sum the distributed stock for each location
        },
      },
      { $sort: { _id: 1 } }, // Sort by location name (ascending)
      {
        $project: {
          _id: 0, // Exclude the `_id` field
          location: "$_id", // Rename `_id` to `location`
          stock: { $round: ["$totalStock", 2] }, // Round the total stock to 2 decimal places
        },
      },
    ]);

    return stockByLocation;
  } catch (error) {
    console.error("Error fetching stock per location:", error);
    throw error;
  }
}

export default getStockPerLocation;
