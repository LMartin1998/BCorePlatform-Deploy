import style from '../styles/MapSite.module.css';
const BlockItem = () => {
  return (
    <li className=" bg-slate-50 w-full mx-auto rounded-lg flex items-center justify-between group hover:bg-gray-200 transition-colors duration-300">
      <div className="flex items-center">
        {/* Container of svg block */}
        <div className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[64px] h-[64px]  group-hover:bg-blue-600 ">
          <svg
            version="1.0"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 39.75 61.55"
            width="100%"
            height="100%"
            style={{ enableBackground: "new 0 0 39.75 61.55" }}
            xmlSpace="preserve"
          >
            <polygon
              id="PCS108"
              className='fill-white stroke-white'
              points="9.32,21.43 0.12,21.43 0.12,56.33 9.12,56.33 9.12,61.42 39.62,61.42 39.62,0.12 
	9.32,0.12 "
            />
          </svg>
        </div>
        {/* Block name */}
        <p className="ml-2 text-gray-700 font-semibold text-base group-hover:text-blue-600">
          PCS-108
        </p>
      </div>
      <div>
        <input type="checkbox" className="mr-2" />
      </div>
    </li>
  );
};

export default BlockItem;
