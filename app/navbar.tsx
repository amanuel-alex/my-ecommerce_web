import Image from "next/image";
import Link from "next/link";
import React from "react";

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

          <div className="col-span-1 relative flex items-center">
            <div className="absolute left-0 mx-1 rounded-sm ">
              <select className="bg-white border border-gray-300  p-2 text-gray-700">
                <option value="">ALL</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <input
              type="text"
              id="search"
              placeholder="Search..."
              className="w-full py-2 pl-12 pr-12 rounded-md  border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700"
            />

            <div className="absolute right-0 mx-1 rounded-sm ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 h-5 w-5 text-gray-500 bg-slate-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 4a7 7 0 011.5 13.8m2.56 2.54l4.25 4.25m0-4.25a7 7 0 10-9.5-9.5"
                ></path>
              </svg>
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
    </nav>
  );
};

export default NavbarContainer;
