const ButtonAddTask = ({onClick}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-4">
      <span className=" text-gray-700 text-sm font-medium">Add comment</span>
      <button onClick={onClick} className="w-8 h-8 bg-indigo-300 rounded-full flex items-center justify-center text-white hover:rotate-180 transition-transform duration-500">
        <span>+</span>
      </button>
    </div>
  );
};

export default ButtonAddTask;
