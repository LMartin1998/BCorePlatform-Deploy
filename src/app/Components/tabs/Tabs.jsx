const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`${
        isActive
          ? "border-b-2 border-blue-500 focus:outline-none text-blue-500 font-semibold dark:text-[#BB86FC] dark:border-[#BB86FC]"
          : "border-b border-transparent focus:outline-none dark:text-white"
      } py-2 px-4 `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="w-full flex justify-center items-center border-b border-gray-200 bg-white dark:bg-[#1A202C] dark:border-[#00000005]">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          isActive={activeTab === index}
          onClick={() => onTabChange(index)}
        ></Tab>
      ))}
    </div>
  );
};

export default Tabs;
