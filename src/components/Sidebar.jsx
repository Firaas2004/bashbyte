import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaBolt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import {
  MdOutlineSignalWifi4Bar,
  MdManageAccounts,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { AiOutlineTransaction } from "react-icons/ai";
import { IoPricetags } from "react-icons/io5";
import { TbCreditCardRefund } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import logo from "../pages/bashbyte.png";

const Sidebar = () => {
  return (
    <>
      <div className="SIDEBAR h-max w-[300px] border-r-[1px]  bg-slate-50">
        <div className="BBB LOGO flex items-center justify-between">
          <Link to="/Dashboard">
            <img src={logo} alt="BBB logo" className="h-20" />
          </Link>
          <MdKeyboardDoubleArrowLeft className="size-7" />
        </div>
        <hr />
        <div className="AFterLogo">
          <div className="WALLET pt-8 pb-3 px-6 flex flex-col gap-y-3">
            <h1 className="text-gray-500 font-medium">WALLET BALANCE</h1>
            <h1 className="text-green-800">$5909</h1>
          </div>
          <div className="TRANSACTION flex justify-between items-center py-3 px-6">
            <h1>Transaction</h1>
            <h1>0</h1>
          </div>
          <h1 className="pt-2 px-6 text-gray-600">Menu</h1>
          <div className="MENU flex flex-col gap-y-2">
            <ul className="flex flex-col ">
              <Link to="/Dashboard">
                <li className="flex items-center gap-3  py-3 px-6 hover:bg-white active:bg-green-50 rounded-full">
                  <MdDashboard />
                  <p>Dashboard</p>
                </li>
              </Link>
              <Link to="/ElectricityPage">
                <li className="flex items-center gap-3 py-3 px-6 hover:bg-white active:bg-green-50 rounded-full">
                  <FaBolt />
                  <p>Purchase Electricity</p>
                </li>
              </Link>
              <Link to="/AirtimePage">
                <li className="flex items-center gap-3 py-3 px-6 hover:bg-white active:bg-green-50 rounded-full">
                  <FaPhoneVolume />
                  <p>Purchase Airtime</p>
                </li>
              </Link>
              <Link to="/DataPage">
                <li className="flex items-center gap-3 py-3 px-6 hover:bg-white active:bg-green-50 rounded-full">
                  <MdOutlineSignalWifi4Bar />
                  <p>Purchase Data</p>
                </li>
              </Link>
              <Link to="*">
                <li className="flex items-center gap-3 py-3 px-6 hover:bg-white active:bg-green-50 rounded-full">
                  <HiMiniComputerDesktop />
                  <p>TV Subscription</p>
                </li>
              </Link>
              <Link to="*">
                <li className="flex items-center gap-3 py-3 px-6 hover:bg-white active:bg-green-50 rounded-full">
                  <AiOutlineTransaction />
                  <p>My Transaction</p>
                </li>
              </Link>
              <Link to="*">
                <li className="flex items-center gap-3 py-3 px-6 hover:bg-white active:bg-green-50 rounded-full">
                  <MdManageAccounts />
                  <p>Account Settings</p>
                </li>
              </Link>
              <Link to="*">
                <li className="flex items-center gap-3 py-3 px-6 hover:bg-white active:bg-green-50 rounded-full">
                  <IoPricetags />
                  <p>Pricing</p>
                </li>
              </Link>
              <Link to="*">
                <li className="flex items-center gap-3 py-3 px-6 hover:bg-white active:bg-green-50 rounded-full">
                  <TbCreditCardRefund />
                  <p>Fund Wallet</p>
                </li>
              </Link>
              <Link to="*">
                <li className="flex items-center gap-3 py-3 px-6 hover:bg-white active:bg-green-50 rounded-full">
                  <BiSupport />
                  <p>Support</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
