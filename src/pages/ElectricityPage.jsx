import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const ElectricityPage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-[80%] px-7">
        <Navbar />
        <div className=" h-[89vh] pl-10 pt-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Electricity Bill</h1>
            <div className="flex gap-5 pb-10">
              <Link to="/Dashboard">
                <p>Dashboard</p>
              </Link>
              <p className="text-gray-400">Electricity Bill</p>
            </div>
          </div>
          <main>
            <form className="flex flex-col gap-5 border border-gray-200 shadow-md h-500px] w-[800px] rounded-2xl p-6">
              <select
                name="disco name"
                className="py-4 px-2 rounded-xl border border-gray-300 bg-white"
              >
                <option value="" disabled selected>
                  Disco Name
                </option>
                <option value="ikeja elect">Ikeja Electricity</option>
                <option value="kaduna elect">Kaduna Electricity</option>
                <option value="eko elect">Eko Electricity</option>
                <option value="jos elect">Jos Electricity</option>
                <option value="abuja elct">Abuja Electricity</option>
                <option value="benin elect">Benin Electricity</option>
              </select>
              <select
                name="metertype"
                className="py-4 px-2 rounded-xl border border-gray-200 bg-white"
              >
                <option value="" disabled selected>
                  Meter Type
                </option>
                <option value="prepaid">Prepaid</option>
                <option value="postpaid">Postpaid</option>
              </select>
              <input
                type="number"
                placeholder="Meter Number"
                className="py-4 px-2 rounded-xl border border-gray-200 bg-white"
              />
              <input
                type="number"
                placeholder="Transaction Pin"
                className="py-4 px-2 rounded-xl border border-gray-200 bg-white"
              />
              <input
                type="number"
                placeholder="Amount"
                className="py-4 px-2 rounded-xl border border-gray-200 bg-white"
              />
              <button className="py-4 px-2 rounded-xl bg-gradient-to-r from-green-600 to-green-700 hover:scale-105 active:scale-95 duration-150 active:bg-gradient-to-l from-green-600 to-green-700">
                Purchase
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ElectricityPage;
