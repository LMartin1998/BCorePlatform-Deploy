const BlockItem = () => {
    return (  
        <li className=" bg-slate-50 w-full mx-auto rounded-lg flex items-center justify-between group hover:bg-gray-200 transition-colors duration-300">
            <div className="flex items-center">
                {/* Container of svg block */}
                <div className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[64px] h-[64px]  group-hover:bg-blue-600 "></div>
                {/* Block name */}
                <p className="ml-2 text-gray-700 font-semibold text-base group-hover:text-blue-600">PCS-108</p> 
            </div>
            <div>
                <input type="checkbox" className="mr-2"/>
            </div>
        </li>
    );
}
 
export default BlockItem;