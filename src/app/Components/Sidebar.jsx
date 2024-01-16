import React from "react";
import Link from "next/link";
import Image from "next/image";
import {RxDashboard} from 'react-icons/rx';
import { CiSquareChevLeft } from "react-icons/ci";

const Sidebar = ({ children, show, setter}) => {

  return (
    <div className="flex">
      <div className={`${show ? "w-72" : "w-20"} fixed h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between`}>
      {/* <div className="fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between"> */}
        <div className="flex gap-x-4 flex-col ">
          <Link href="/">
            <div className="bg-blue-800 p-1 rounded-lg inline-block">
                <Image src="/Assets/BCORE-LOGO-White.png" width={50} height={50} alt="Logo B-Core" />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link href='/'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block flex'>
              <RxDashboard size={25} />
                <p className={`${show ? "" : "hidden"} pl-4`}>Teams</p>
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block flex justify-center'>
            <CiSquareChevLeft onClick={()=> {setter(oldval => !oldval )}} size={25} />
          </div>
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
