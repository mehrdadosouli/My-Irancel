import React, { useEffect, useState } from "react";
import { getFromLocalStorage } from "../../utils/funcs";
import { useQuery } from "@tanstack/react-query";

export default function BoxSuggest() {
  const [dataPacket,setDataPacket]=useState([])
  var local = getFromLocalStorage("user");
  var tokens = JSON.parse(local).token;
  const { data, isLoading,isFetching } = useQuery(
    ["Packet"],
    () => {
      return fetch("http://localhost:5000/packet", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${tokens}`,
        },
      }).then((response) => response.json());
    },
    {
      staleTime: 5000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 1,
    }
  );
  return (
    <div className="flex flex-col bg-white-50 p-10 rounded-3xl gap-10 mt-10 ">
      <h4>بسته های پیشنهادی مخصوص خود شما!</h4>
      <div>
        <table className="table-fixed w-full border-collapse [&>*]:text-center [&>*]:border-black [&>*]:border-solid [&>*]:border">
          <thead>
            <tr className="[&>*]:p-5">
              <th>تاریخ انقضا بسته</th>
              <th>نام بسته</th>
              <th>تخفیف</th>
              <th>قیمت</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((elem) => (
                  <tr key={elem.id}>
                    <td>14شهریور</td>
                    <td>بسته سه ماهه</td>
                    <td>20%</td>
                    <td>130000</td>
                    <td>
                      <button className="bg-gold-400 lg:py-3 lg:px-10 p-2 rounded-2xl my-5">
                        خرید
                      </button>
                    </td>
                  </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
