import React from "react";
import { MdOutlineDomainAdd } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between h-[10.6vh]">
        <div className="flex items-center gap-">
          <MdOutlineDomainAdd className="size-10 text-green-700" />
          <p>Main website...</p>
        </div>
        <div className="flex items-center gap-2">
          <FaUserCircle className="size-11 text-green-700" />
          <div className="">
            <p>08135312278</p>
            <p>Bashir Ishaq</p>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
