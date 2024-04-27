import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import BoxSuggest from "./BoxSuggest";

const data = {
  labels: ["12/1", "12/12", "12/17", "12/23", "12/25", "12/30"],
  datasets: [
    {
      label: "نمودار میزان مصرف اینترنت",
      data: [95, 59, 80, 81, 56, 55, 40],
      borderColor: "#FAA300",
      fill: true,
      tension: 0.45,
      backgroundColor: "#F5DD61",
    },
  ],
};
const options = {
  plugins: {
    legend: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};
export default function CenterSide() {
  return (
    <div className="flex flex-col gap-10 lg:mx-0 mx-auto lg:w-[100%] w-[80%]">
      <div className="relative mt-10 ">
        <img src="https://irancell.ir/wp-content/uploads/2024/02/Web-Banner-1680x840-CTA-EN.jpg" alt="" className="rounded-2xl h-96 w-full object-cover object-center md:object-right" />
      </div>
      <div className="bg-white-50 p-10 rounded-3xl">
        <h3>نمودار میزان مصرف اینترنت</h3>

          <Line
            data={data}
            options={options}
            plugins={[Chart]}
            className="w-full"
          />

      </div>
      <div>
        <BoxSuggest />
      </div>
    </div>
  );
}
