import { useContext, useEffect } from "react";
import { GridContext } from "../contexts/GridContext";
import Image from 'next/image';

export default function Zoom() {
  const { zoom, increaseZoom, decreaseZoom } = useContext(GridContext);

  useEffect(() => {
    console.log(zoom);
  }, [zoom]);

  return <>
    <div className="absolute right-0 bottom-0 p-4">
      <button id="fullscreen" className="bg-white border border-gray-300 rounded-md text-gray-700 font-bold px-5 py-2 cursor-pointer transition duration-200 hover:bg-gray-200 hover:text-black w-7 h-7 flex items-center justify-center z-4">
        <Image width="50" height="50" src="https://img.icons8.com/ios/50/full-screen--v1.png" alt="full-screen--v1" />
      </button>
      <button id="zoom-in" className="bg-white border border-gray-300 rounded-md text-gray-700 font-bold px-5 py-2 cursor-pointer transition duration-200 hover:bg-gray-200 hover:text-black w-7 h-7 flex items-center justify-center z-4"
      onClick={increaseZoom}>+</button>
      <button id="zoom-out" className="bg-white border border-gray-300 rounded-md text-gray-700 font-bold px-5 py-2 cursor-pointer transition duration-200 hover:bg-gray-200 hover:text-black w-7 h-7 flex items-center justify-center z-4"
      onClick={decreaseZoom}>-</button>
    </div>
  </>
}
