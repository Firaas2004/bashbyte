import React from "react";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const AirtimePage = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-[80%] px-7">
        <Navbar />
        <div className=" h-[89vh] pl-10 pt-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Buy Airtime</h1>
            <div className="flex gap-5 pb-10">
              <Link to="/Dashboard">
                <p>Dashboard</p>
              </Link>
              <p className="text-gray-400">Airtime</p>
            </div>
          </div>
          <main>
            <form className="flex flex-col gap-5 border border-gray-200 shadow-md h-500px] w-[800px] rounded-2xl p-6">
              <select
                name="network"
                className="py-4 px-2 rounded-xl border border-gray-300 bg-white"
              >
                <option value="" disabled selected>
                  Network
                </option>
                <option value="MTN">MTN</option>
                <option value="AIRTEL">AIRTEL</option>
                <option value="GLO">GLO</option>
                <option value="9MOBILE">9 MOBILE</option>
              </select>
              <select
                name="network type"
                className="py-4 px-2 rounded-xl border border-gray-200 bg-white"
              >
                <option value="" disabled selected>
                  Network Type
                </option>
                <option value="gifting">VTU</option>
                <option value="cooperate gifting">Share and Sell</option>
              </select>
              <input
                type="number"
                placeholder="Phone number"
                className="py-4 px-2 rounded-xl border border-gray-200 bg-white"
              />
              <div>
                <div className="flex gap-2 items-center">
                  <h1>Network is: AIRTEL</h1>
                  <MdVerified className="text-red-600" />
                </div>
                <h1>NB: Ignore this warning for Ported Numbers</h1>
              </div>
              <input
                type="number"
                placeholder="Amount"
                className="py-4 px-2 rounded-xl border border-gray-200 bg-white"
              />
              <input
                type="number"
                placeholder="Transaction Pin"
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

export default AirtimePage;
