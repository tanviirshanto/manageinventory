import { connect } from "../../../dbConfig/dbConfig";
import Stockin from "../../../models/StockinsModel";

async function getTotalStockinsLast30Days() {
  try {
    // Connect to the database
    await connect();

    // Calculate the date 30 days ago
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    // Aggregation query for total stock-ins
    const result = await Stockin.aggregate([
      {
        $match: {
          buyingDate: { $gte: thirtyDaysAgo }, // Match stock-ins from the last 30 days
        },
      },
      {
        $group: {
          _id: null, // Group all documents together
          totalStockins: { $sum: "$quantityBought" }, // Sum the quantityBought field
          totalAmount: { $sum: "$totalAmount" }, // Sum the totalAmount field
        },
      },
    ]);

    // Return the totals or default to 0 if no data
    return {
      totalStockins: result.length > 0 ? result[0].totalStockins : 0,
      totalAmount: result.length > 0 ? result[0].totalAmount : 0,
    };
  } catch (error) {
    console.error("Error fetching total stock-ins:", error);
    throw error;
  }
}

export default getTotalStockinsLast30Days;
