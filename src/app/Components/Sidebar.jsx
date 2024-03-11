import Link from "next/link";
import Image from "next/image";
import { IoHomeOutline } from "react-icons/io5";
import { CiSquareChevLeft } from "react-icons/ci";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoDocumentOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext, useEffect, useState } from "react";

const Sidebar = ({ children, show, setter }) => {
  const { active, setActive } = useContext(SidebarContext);

  const [colors, setColors] = useState(
    Array(4).fill({
      color: "#1E40AF",
      bgColor: "bg-white",
    }),
  );

  const updateColors = (id) => {
    const newColors = colors.map((color, index) => {
      if (id == index) {
        return { color: "white", bgColor: "bg-blue-800" };
      } else {
        return { color: "#1E40AF", bgColor: "bg-white" };
      }
    });
    setColors(newColors);
  };

  useEffect(() => {
    if (active !== null && active !== undefined) {
      updateColors(active);
    }
  }, [active]);

  return (
    <div>
      <div
        className={`${
          show ? "w-72" : "w-20"
        } fixed h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between`}
      >
        <div className="flex gap-x-4 flex-col ">
          <Link href="/">
            <div className="bg-blue-800 p-1 rounded-lg inline-block">
              <Image
                src="/Assets/BCORE-LOGO-White.png"
                width={50}
                height={50}
                alt="Logo B-Core"
                loading="lazy"
              />
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link
            href="/"
            id="0"
            onClick={(e) => {
              e.stopPropagation();
              setActive(e.currentTarget.id);
              updateColors(e.currentTarget.id);
            }}
          >
            <div className="bg-gray-100 hover:bg-gray-200 justify-center  cursor-pointer my-4 p-3 rounded-lg flex">
              <div className="flex justify-center items-center">
                <p
                  className={`${colors[0].bgColor} flex justify-center items-center p-2 rounded-lg w-[35px] h-[35px]`}
                >
                  <IoHomeOutline
                    className="flex justify-center"
                    style={{ color: colors[0].color }}
                    size={25}
                  />
                </p>
              </div>
              <div className={`${show ? "" : "hidden"} w-full text-center`}>
                <h2 className=" text-black-700">Site</h2>
                <p className="text-gray-400">BlackBeard</p>
              </div>
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link
            href="/reports"
            id="1"
            onClick={(e) => {
              e.stopPropagation();
              setActive(e.currentTarget.id);
              updateColors(e.currentTarget.id);
            }}
          >
            <div className="bg-gray-100 hover:bg-gray-200 flex justify-center cursor-pointer my-4 p-3 rounded-lg inline-block flex">
              <div className="flex justify-center items-center">
                <p
                  className={`${colors[1].bgColor} flex justify-center items-center p-2 rounded-lg w-[35px] h-[35px]`}
                >
                  <HiOutlineDocumentReport
                    className="flex justify-center"
                    style={{ color: colors[1].color }}
                    size={25}
                  />
                </p>
              </div>
              <div className={`${show ? "" : "hidden"} w-full text-center`}>
                <p className="text-gray-400">Reports</p>
              </div>
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link
            href="/teams"
            id="2"
            onClick={(e) => {
              e.stopPropagation();
              setActive(e.currentTarget.id);
              updateColors(e.currentTarget.id);
            }}
          >
            <div className="bg-gray-100 hover:bg-gray-200 flex justify-center cursor-pointer my-4 p-3 rounded-lg inline-block flex">
              <div className="flex justify-center items-center">
                <p
                  className={`${colors[2].bgColor} flex justify-center items-center p-2 rounded-lg w-[35px] h-[35px]`}
                >
                  <AiOutlineTeam
                    className="flex justify-center"
                    style={{ color: colors[2].color }}
                    size={25}
                  />
                </p>
              </div>
              <div className={`${show ? "" : "hidden"} w-full text-center`}>
                {/* <h2 className=" text-gray-700">Reports</h2> */}
                <p className="text-gray-400">Teams</p>
              </div>
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          <Link
            href="/docs"
            id="3"
            onClick={(e) => {
              e.stopPropagation();
              setActive(e.currentTarget.id);
              updateColors(e.currentTarget.id);
            }}
          >
            <div className="bg-gray-100 hover:bg-gray-200 flex justify-center cursor-pointer my-4 p-3 rounded-lg inline-block flex">
              <div className="flex justify-center items-center">
                <p
                  className={`${colors[3].bgColor} flex justify-center items-center p-2 rounded-lg w-[35px] h-[35px]`}
                >
                  <IoDocumentOutline
                    className="flex justify-center "
                    style={{ color: colors[3].color }}
                    size={25}
                  />
                </p>
              </div>
              <div className={`${show ? "" : "hidden"} w-full text-center`}>
                {/* <h2 className=" text-gray-700">Reports</h2> */}
                <p className="text-gray-400">Documentation</p>
              </div>
            </div>
          </Link>
          <span className="border-b-[1px] border-gray-200 w-full p-2"></span>
          {/* Add new shortcut */}
          <div
            className="bg-gray-100 hover:bg-gray-200 flex justify-center cursor-pointer my-4 p-3 rounded-lg inline-block flex justify-center"
            onClick={() => {
              setter((oldval) => !oldval);
            }}
          >
            <CiSquareChevLeft size={25} />
          </div>
        </div>
      </div>
      <main className={`${show ? "ml-18" : "ml-20"}`}>{children}</main>
    </div>
  );
};

export default Sidebar;
