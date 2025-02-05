import { connect } from "../../../dbConfig/dbConfig";
import Sale from "../../../models/SalesModel";

export default async function fetchSalesData() {
  try {
    await connect(); // Ensure the database connection is established

    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    // Aggregate query for total sales and total sold items
    const result = await Sale.aggregate([
      {
        $match: {
          saleDate: { $gte: thirtyDaysAgo }, // Match sales in the last 30 days
        },
      },
      {
        $group: {
          _id: null,
          totalSales: { $sum: "$totalAmount" },
          totalSoldItem: { $sum: "$quantitySold" },
        },
      },
    ]);

    return {
      totalSales: result.length > 0 ? result[0].totalSales : 0,
      totalSoldItem: result.length > 0 ? result[0].totalSoldItem : 0,
    };
  } catch (error) {
    console.error("Error fetching sales data:", error);
    return { totalSales: 0, totalSoldItem: 0 };
  }
}
