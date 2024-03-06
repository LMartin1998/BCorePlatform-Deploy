const Tab = ({label, isActive, onClick}) => {
    return (
        <button className={`${
            isActive
                ? 'border-b-2 border-blue-500 focus:outline-none text-blue-500 font-semibold'
                : 'border-b border-transparent focus:outline-none'
        } py-2 px-4 `}
        onClick={onClick}
        >
            {label}
        </button>
    );
};

const Tabs =({ tabs, activeTab, onTabChange }) => {

    return (
        <div className="w-full flex justify-center items-center border-b border-gray-200 bg-white">
            {tabs.map((tab, index) => (
                <Tab
                    key={index}
                    label={tab.label} 
                    isActive={activeTab === index}
                    onClick={() => onTabChange(index)}
                >
                </Tab>
            ))}
        </div>
    )
}

export default Tabs;