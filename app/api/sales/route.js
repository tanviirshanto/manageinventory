
import { connect } from "../../../dbConfig/dbConfig";
import Sale from "../../../models/SalesModel";

export async function GET(req) {
    try {
        await connect();
        const sales = await Sale.find();
        return new Response(JSON.stringify(sales), { status: 200 });
    }
    catch (error) {
        console.error("Error fetching sales:", error);
        return new Response(
          JSON.stringify({ error: "Failed to fetch sales" }),
          {
            status: 500,
          }
        );
    }


}