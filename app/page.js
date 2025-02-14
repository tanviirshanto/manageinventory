import StatusCard from "../components/Home/statusCard";

import { FaShirt, FaBagShopping } from "react-icons/fa6";
import { PiPantsFill } from "react-icons/pi";
import { FaHatCowboy } from "react-icons/fa";
import { TbEyeglass2 } from "react-icons/tb";
import { GiConverseShoe } from "react-icons/gi";
import uniqid from "uniqid";
import Sale from "../models/SalesModel";
import { connect } from "../dbConfig/dbConfig"; // Ensure the correct path
import getTotalStockinsLast30Days from "../components/Home/Functions/stockIns30Days";
import fetchSalesData from "../components/Home/Functions/sales30Days";
import getLowStockProducts from "../components/Home/Functions/getLowStock";
import SalesChart from "../components/Home/salesChart";
import SalesFigure from "../components/Home/salesFigure";
import getTopSellingItems from "../components/Home/Functions/getTopSellingItems";
import Image from "next/image";
import Link from "next/link";
import getStoreInfo from "../components/Home/Functions/getStoreInfo";
// import getStockPerLocation from "../components/Home/Functions/getStockByLocation";

const style2 =
  "p-2 w-1/4 h-20 rounded-xl flex justify-center items-center bg-[#e5d5f9]";

export default async function Home() {
  const { totalSales, totalSoldItem } = await fetchSalesData();
  const { totalStockins, totalAmount } = await getTotalStockinsLast30Days();
  const lowStockProducts = await getLowStockProducts();
  // console.log(lowStockProducts, totalStockins);
  const topSellingItems = await getTopSellingItems();
  const stores = await getStoreInfo();
  // const { stockByLocation } = await getStockPerLocation();

  // console.log(stockByLocation);

  return (
    <div className="">
      <div className="bg-[#f3f3f3] py-3 ">
        <h1 className="text-2xl font-bold text-center">Last 30 Daaays</h1>
        <div className="flex justify-center  lg:gap-10 my-3 ">
          <StatusCard name="Total Sold" p1={totalSoldItem} p2="Unit" key={uniqid()} />
          <StatusCard name="Total Sold" p1={totalSales} p2="Amount" key={uniqid()}/>
          <StatusCard name="In Stock" p1={totalStockins} p2="Unit" key={uniqid()}/>
          <StatusCard name="Stocked" p1={totalAmount} p2="Amount" key={uniqid()}/>
        </div>
      </div>

      <div className="w-full lg:w-[80%] mx-auto flex flex-col  lg:flex-row gap-5 my-8">
        <SalesFigure />
        <div className="w-full lg:w-1/3 bg-[#f3f3f3] p-5 rounded-2xl">
          <div className="flex justify-between items-center text-lg font-bold">
            <h1>Top Selling Items</h1>{" "}
            <Link
              href="/products"
              className="text-sm font-semibold text-gray-500"
            >
              View all
            </Link>
          </div>

          <div className="flex flex-col gap-3 text-7xl text-[#4905a2]">
            <div className="flex flex-wrap gap-3 justify-center mt-5">
              {topSellingItems?.map((item) => (
                <div className={`${style2}`} key={item._id}>
                  <Image
                    src={item.image}
                    width={48}
                    height={48}
                    alt={`${item.name}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[80%] mx-auto flex flex-col lg:flex-row  gap-5 my-8">
        <div className="w-full lg:w-1/3 bg-[#f3f3f3] p-5 rounded-2xl">
          <h1 className="text-lg font-bold">Low stock items</h1>
          <div className="mt-5 mb-3 flex flex-col gap-4">
            {!lowStockProducts && <div>No items</div>}
            {lowStockProducts &&
              lowStockProducts.map((item) => (
                <div className="flex justify-between" key={item._id}>
                  <h1>{item.name}</h1>
                  <h1>{item.stock}</h1>
                </div>
              ))}

            {/* <div className="flex justify-between">
              <h1>Item categories</h1>
              <h1>8</h1>
            </div>
            <div className="flex justify-between">
              <h1>Refunded items</h1>
              <h1>1</h1>
            </div> */}
          </div>
        </div>
        <div className="w-full lg:w-2/3 bg-[#f3f3f3] p-5 rounded-2xl">
          <div className="flex justify-between items-center text-lg font-bold">
            <h1>Stores list</h1>{" "}
            <Link
              href="/stores"
              className="text-sm font-semibold text-gray-500"
            >
              View all
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="mt-5 mb-3 w-full gap-4  ">
              <tbody>
                {stores.slice(0, 3).map((store) => (
                  <tr className="text-center" key={store._id}>
                    <td className="text-left align-middle p-2">
                      {store.location}
                    </td>
                    <td className="text-left align-middle p-2">
                      {store.email}
                    </td>
                    <td className="text-left align-middle p-2">308 items</td>
                    <td className="text-right align-middle p-2">
                      +{store.contactNumber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
