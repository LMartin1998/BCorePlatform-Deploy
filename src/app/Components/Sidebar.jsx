import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { CiSquareChevLeft } from "react-icons/ci";

const Sidebar = ({ children, show, setter}) => {

  return (
    <div className="flex">
      <div className={`${show ? "w-72" : "w-20"} fixed h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between`}>
        <div className="flex gap-x-4 flex-col ">
          <Link href="/">
            <div className="bg-blue-800 p-1 rounded-lg inline-block">
                <Image src="/Assets/BCORE-LOGO-White.png" width={50} height={50} alt="Logo B-Core" />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block flex'>
              <div className="flex justify-center items-center">
                <IoHomeOutline className="flex justify-center " size={25} />
              </div>
              <div className={`${show ? "" : "hidden"} w-full text-center`}>
                <h2 className=" text-gray-700">Teams</h2>
                <p className="text-gray-400">Happy Arkansas</p>
              </div>
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block flex justify-center' onClick={()=> {setter(oldval => !oldval )}}>
            <CiSquareChevLeft size={25} />
          </div>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
