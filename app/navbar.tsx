import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { RiMenuUnfoldFill } from "react-icons/ri";
const NavbarContainer = () => {
  return (
    <nav className=" text-white  ">
      <div className="max-w-8xl bg-green-900   ">
        <div className="grid grid-cols-[1fr_1fr_7fr_1fr_1fr_1fr_1fr] p-2 gap-4">
          <div className="rounded-md  hover:ring-green-500 text-white p-2">
            <Link href="#">
              <Image
                src="/img/logo.png"
                alt="company logo"
                width={80}
                height={30}
                className="pt-1"
              />
            </Link>
          </div>

          <div className="  focus:border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md  text-white p-2 ">
            Column 2
          </div>

          <div className="col-span-1 relative flex items-center ">
            <div className="absolute left-0 ml-1  border rounded focus:border-orange-700 focus:ring-red-500-  ">
              <select className="bg-white text-slate-400  focus:outline-none  border       py-[10px] ">
                <option value="">ALL</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <input
              type="text"
              id="search"
              placeholder="Search Amazon..."
              className="w-full p-2  pl-28 pr-12 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 text-gray-700 rounded-lg"
            />

            <div className="absolute right-0 ml-1 rounded-sm ">
              <div className="bg-red-700 border-gray-300  p-3 text-gray-700 hover:bg-red-800 rounded-r">
                <FaSearch color="white" />
              </div>
            </div>
          </div>

          <div className="rounded-md border border-gray-300 hover:ring-green-500 text-white p-2">
            Column 4
          </div>

          <div className="rounded-md border border-gray-300 hover:ring-green-500 text-white p-2">
            Column 5
          </div>

          <div className="rounded-md border border-gray-300 hover:ring-green-500 text-white p-2">
            Column 6
          </div>

          <div className="rounded-md border border-gray-300 hover:ring-green-500 text-white p-2">
            Column 7
          </div>
        </div>
      </div>
      <div className="max-w-8xl bg-green-700   ">
        <div className="grid grid-cols-[3rem_1fr]  ">
          <div className="  focus:border-gray-300 focus:ring-2 focus:ring-blue-500 rounded-md  text-white p-2 ">
            <RiMenuUnfoldFill className="text-3xl" />
          </div>

          <div className="rounded-md  hover:ring-green-500 text-white p-2">
            Column
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarContainer;
