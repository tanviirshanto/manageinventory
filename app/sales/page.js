
import { connect } from "../../dbConfig/dbConfig";
import Sale from "../../models/SalesModel";
import Header from "../../components/Sales/Header";
import SalesTable from "../../components/Sales/SalesTable";
import TableView from "../../components/Common/TableView";

connect();

async function GetAllSales() {
  const sales = await Sale.find().populate("product", "name image").lean();
  return sales;
}


export default async function SalesPage() {
  const sales = await GetAllSales();
  const headers = [
    "Image",
    "Name",
    "Quantity Sold",
    "Sale Price",
    "Total Amount",
    "Payment Method",
    "Date",
  ];
  return (
    <div>
      <TableView
        items={JSON.stringify(sales)}
        headers={headers}
        pageName="Sales"
      />
    </div>
  );
}
