import React from "react";
import logo from "./bashbyte.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <section className=" SignIn flex flex-col items-center justify-center bg-slate-50 h-screen">
        <div>
          <img src={logo} alt="BBB logo" className=" h-24 animate-pulse" />
        </div>
        <div className="SignIn  w-[500px] rounded-xl  h-[520px] px-12 pb-6 pt-10 flex flex-col items-center gap-y-7 bg-white">
          <h1 className="text-xl font-semibold">Sign-in</h1>
          <p className="text-gray-600">
            Access the BBB panel using you email and password
          </p>
          <div className="Username">
            <h3 className="font-medium">Username</h3>
            <input
              className="bg-slate-50 border border-gray-300 py-2 pl-9 pr-[117px] rounded-lg"
              type="text"
              placeholder="username"
            />
          </div>
          <div className="Password">
            <div className="password flex justify-between flex-wrap">
              <h3 className="font-medium">Password</h3>
              <h3 className="text-green-800">forgot password?</h3>
            </div>
            <input
              className="bg-slate-50 border border-gray-300 py-2 pl-9 pr-[117px] rounded-lg"
              type="password"
              placeholder="password"
            />
          </div>

          <Link to="/Dashboard">
            <button className="bg-gradient-to-r from-green-600 to-green-700 hover:scale-105 active:scale-95 duration-150 active:bg-gradient-to-l from-green-600 to-green-700 py-2 px-[177px] rounded-full text-white">
              Sign-in
            </button>
          </Link>
          <div className="TextAfterButton flex flex-col justify-center items-center gap-y-2">
            <p>or</p>
            <h3>Sign up with Google</h3>
            <h2>
              New on our platform?{" "}
              <span className="text-green-800">Create an account</span>
            </h2>
          </div>
        </div>
        <div className="text-gray-600  mb-px">
          Sign-in / BBB @2024 All Rights Reserved
        </div>
      </section>
    </div>
  );
};

export default SignIn;
