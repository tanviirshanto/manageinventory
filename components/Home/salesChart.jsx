"use client"
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Confirmed", value: 30 },
  { name: "Packed", value: 50 },
  { name: "Refunded", value: 10 },
  { name: "Shipped", value: 70 },
];

const SalesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        barSize={20} // Adjusts the bar width
      >
        <CartesianGrid
          stroke="#e4daf4" // Line color
          strokeDasharray="0" // Solid lines
          vertical={false} // Hide vertical lines
        />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={{
            stroke: "#4c4e4f", // Change axis color
            strokeWidth: 2, // Change axis weight
          }}
        />
        <YAxis hide />
        <Tooltip />
        <Bar
          dataKey="value"
          fill="purple"
          radius={[10, 10, 10, 10]} // Adjusts the corner radius
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;

