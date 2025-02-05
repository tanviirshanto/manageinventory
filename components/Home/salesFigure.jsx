"use client"
import SalesChart from "./salesChart"
const SalesFigure = () => {
    return (
      <div className="w-full lg:w-2/3 bg-[#f3f3f3] p-5 rounded-2xl flex   ">
        <h1 className="text-xl font-bold w-1/5 flex items-start lg:pl-5 pt-2 ">
          Sales
        </h1>
        <div className="w-4/5 flex  items-center">
          <SalesChart />
        </div>
      </div>
    );
}

export default SalesFigure;