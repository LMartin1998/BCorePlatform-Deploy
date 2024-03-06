const Tab = ({label, isActive, onClick}) => {
    return (
        <button className={`${
            isActive
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } py-2 px-4 rounded `}
        onClick={onClick}
        >
            {label}
        </button>
    );
};

const Tabs =({ tabs, activeTab, onTabChange }) => {

    return (
        <div className="flex">
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