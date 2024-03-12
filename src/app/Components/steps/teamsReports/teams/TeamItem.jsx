import { FaUsers } from "react-icons/fa";

const TeamItem = ({team, onChange}) => { //TODO: Props 
  return (
    <li className=" bg-slate-50 w-full mx-auto rounded-lg flex items-center justify-between group hover:bg-gray-200 transition-colors duration-300 mb-2">
      <div className="flex items-center">
        <div className="bg-blue-800 flex justify-center items-center p-2 rounded-lg w-[64px] h-[64px]  group-hover:bg-blue-600">
          <FaUsers size={30} style={{ color:"white" }} />
        </div>
        <p className="ml-2 text-gray-700 font-semibold text-base group-hover:text-blue-600">
          {team}
        </p>
      </div>
      <div>
        <input
          type="checkbox"
          className="mr-2"
          onChange={onChange}
        >
        </input>
      </div>
    </li>
  );
};

export default TeamItem;
