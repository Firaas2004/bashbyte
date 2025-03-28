import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { FaLongArrowAltDown, FaGraduationCap } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { TbTransferIn } from "react-icons/tb";
import { IoCopy } from "react-icons/io5";
import { PiHandWavingBold } from "react-icons/pi";
import { HiWifi } from "react-icons/hi";
import { TbSunElectricity } from "react-icons/tb";
import { HiDesktopComputer } from "react-icons/hi";
import { LiaSmsSolid } from "react-icons/lia";
import Navbar from "../components/Navbar";
const Dashboard = () => {
  return (
    <div className="DASHBOARD PAGE  flex h-screen">
      <Sidebar />
      <div className="NAV AND DASH  w-[80%] px-7">
        <Navbar />
        <div className="GEN DIV flex justify-between items-center pt-12 ">
          <div className="DIV 1 flex flex-col gap-2">
            <div className=" flex items-center gap-3">
              <h1 className="text-4xl">Welcome, Bashir </h1>
              <PiHandWavingBold className="size-10" />
            </div>

            <h1>Manage your account and Subscription</h1>
          </div>
          <div className="DIV 2 flex gap-x-4">
            <Link to="*">
              <div className=" flex items-center justify-center gap-x-4  bg-green-700 h-[80px] w-[250px]  rounded-md hover:scale-105 active:scale-95 duration-150">
                <BsBank className="size-10" />
                <div className=" flex flex-col justify-center items-center">
                  <h1>Fund Wallet</h1>
                  <h1>from E-bank</h1>
                </div>
              </div>
            </Link>
            <Link to="*">
              <div className=" flex items-center justify-center gap-x-4 bg-green-800 h-[80px] w-[250px]  rounded-md hover:scale-105 active:scale-95 duration-150">
                <TbTransferIn className="size-10" />
                <div className="flex-col justify-center items-center">
                  <h1>Fund Wallet</h1>
                  <h1>Manually</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <main className="pt-20">
          <h1 className="text-gray-600 text-lg p-3">Account Overview</h1>
          <section className="flex  items-center gap-8">
            <div className=" OVERVIEW h-96 w-[500px] bg-green-100 flex flex-col gap-3 pt-4 px-6">
              <div>
                <h1>Wallet Balance</h1>
                <h1 className="text-green-800">$5909</h1>
              </div>
              <h1>Fund your Wallet</h1>
              <div className="flex gap-2 items-center">
                <h1>Automated Bank Transfer</h1>
                <FaLongArrowAltDown className="text-green-800" />
              </div>
              <h1 className="text-sm">
                MAKE A TRANSFER TO THIS ACCOUNT NUMBER GIVEN TO YOU AND YOUR
                WALLET WILL BE CREDITED IMMEDIATELY
              </h1>
              <div className="flex items-center gap-4">
                <h1>ACCOUNT NUMBER: 8135312278</h1>
                <IoCopy className="text-green-800" />
              </div>
              <h1>BANK NAME: OPAY BANK</h1>
              <h1>ACCOUNT NAME: BBB- BASHIR ISHAQ</h1>
              <h1>CHARGES: 1% CAPPED AT $50</h1>
            </div>
            <div className=" ROUTINGS   flex flex-col justify-center items-center gap-4 ">
              <div className=" LAYER 1 flex  gap-3">
                <Link to="/DataPage">
                  <div className="bg-green-100 flex flex-col justify-center items-center gap-2  h-32 w-[220px] hover:scale-105 active:scale-95 duration-150">
                    <HiWifi className="size-11 text-green-800" />
                    <h1 className="font-medium">Buy Data</h1>
                  </div>
                </Link>
                <Link to="/AirtimePage">
                  <div className="bg-green-100 flex flex-col justify-center items-center gap-2 h-32 w-[220px] hover:scale-105 active:scale-95 duration-150">
                    <FaPhoneVolume className="size-11 text-green-800" />
                    <h1 className="font-medium">Buy Airtime</h1>
                  </div>
                </Link>
                <Link to="*">
                  <div className="bg-green-100 flex flex-col justify-center items-center gap-2  h-32 w-[220px] hover:scale-105 active:scale-95 duration-150">
                    <FaGraduationCap className="size-11 text-green-800" />
                    <h1 className="font-medium"> Result Checker</h1>
                  </div>
                </Link>
              </div>
              <div className=" LAYER 2 flex  gap-3">
                <Link to="/ElectricityPage">
                  <div className="bg-green-100 flex flex-col justify-center items-center gap-2 h-32 w-[220px] hover:scale-105 active:scale-95 duration-150">
                    <TbSunElectricity className="size-11 text-green-800" />
                    <h1 className="font-medium">Electricity Bill</h1>
                  </div>
                </Link>
                <Link to="*">
                  <div className="bg-green-100 flex flex-col justify-center items-center gap-2 h-32 w-[220px] hover:scale-105 active:scale-95 duration-150">
                    <HiDesktopComputer className="size-11 text-green-800" />
                    <h1 className="font-medium">TV Subscribtion</h1>
                  </div>
                </Link>
                <Link to="*">
                  <div className="bg-green-100 flex flex-col justify-center items-center gap-2  h-32 w-[220px] hover:scale-105 active:scale-95 duration-150">
                    <LiaSmsSolid className="size-11 text-green-800" />
                    <h1 className="font-medium">Bulk SMS</h1>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
