import React from "react";

export default function BoxSuggest() {
  return (
    <div className="flex flex-col bg-white-50 p-10 rounded-3xl gap-10">
      <h4>بسته های پیشنهادی مخصوص خود شما!</h4>
      <div>
        <table className="table-fixed w-full border-collapse [&>*]:text-center [&>*]:border-black  [&>*]:border-solid  [&>*]:border">
          <tr className="[&>*]:p-5">
            <th>تاریخ انقضا بسته</th>
            <th>نام بسته</th>
            <th>تخفیف</th>
            <th>قیمت</th>
          </tr>
          <tr className="[&>*]:m-5">
            <td>14شهریور</td>
            <td>بسته سه ماهه</td>
            <td>20%</td>
            <td>130000</td>
            <button className="bg-gold-400 py-3 px-10 rounded-2xl">خرید</button>
          </tr>
          <tr className="[&>*]:m-5">
            <td>14شهریور</td>
            <td>بسته سه ماهه</td>
            <td>20%</td>
            <td>130000</td>
            <button className="bg-gold-400 py-3 px-10 rounded-2xl">خرید</button>
          </tr>
          <tr className="[&>*]:m-5">
            <td>14شهریور</td>
            <td>بسته سه ماهه</td>
            <td>20%</td>
            <td>130000</td>
            <button className="bg-gold-400 py-3 px-10 rounded-2xl">خرید</button>
          </tr>
          <tr className="[&>*]:m-5">
            <td>14شهریور</td>
            <td>بسته سه ماهه</td>
            <td>20%</td>
            <td>130000</td>
            <button className="bg-gold-400 py-3 px-10 rounded-2xl">خرید</button>
          </tr>
        </table>
      </div>
    </div>
  );
}
