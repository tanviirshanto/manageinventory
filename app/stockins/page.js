
import { connect } from "../../dbConfig/dbConfig";
import Stockin from "../../models/StockinsModel";
// import Header from "../../components/Common/Header";
import TableView from "../../components/Common/TableView";

connect();

export async function GetAllStockins() {
  const stockins = await Stockin.find()
    .populate("product", "name image") // Populate the `product` field and fetch only the `name` field
    .lean(); // Convert the Mongoose documents to plain JavaScript objects
  return stockins;
}


export default async function StockinsPage() {
  const stockins = await GetAllStockins();
  const headers = [
    "Image",
    "Name",
    "Quantity Bought",
    "Buying Price",
    "Total Amount",
    "Payment Method",
    "Date",
  ];
  return (
    <div>
      {/* <Header /> */}
      <TableView items={JSON.stringify(stockins)} headers={headers} pageName="Stock Ins" />
    </div>
  );
}
