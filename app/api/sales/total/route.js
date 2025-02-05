import { connect } from "../../../../dbConfig/dbConfig";
import Sale from "../../../../models/SalesModel";

export async function GET(req) {
  try {
    // Ensure the database connection is established
    await connect();

    // Calculate the date 30 days ago
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    // Query to sum up the total sales amount
    const result = await Sale.aggregate([
      {
        $match: {
          saleDate: { $gte: thirtyDaysAgo }, // Match sales in the last 30 days
        },
      },
      {
        $group: {
          _id: null, // Group all documents together
          totalSales: { $sum: "$totalAmount" },
          totalSoldItem: { $sum: "$quantitySold" },
          // Sum the totalAmount field
        },
      },
    ]);

      const totalSales = result.length > 0 ? result[0].totalSales : 0;
      const totalSoldItem = result.length > 0 ? result[0].totalSoldItem : 0;

    // Return the total sales as a JSON response
    return new Response(JSON.stringify({ totalSales, totalSoldItem }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching total sales:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch total sales" }),
      { status: 500 }
    );
  }
}
