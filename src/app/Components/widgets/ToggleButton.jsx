import clsx from 'clsx';

const ToggleButton = ({ label, active, onClick }) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center px-4 py-2 border border-slate-200 dark:border-[#1F2733] text-sm leading-5 font-medium rounded-sm focus:outline-none focus:shadow-outline-indigo transition ease-in-out duration-150',
        active ? 'text-indigo-700 dark:text-[#1F2733] bg-indigo-300 dark:bg-white hover:bg-indigo-200 focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-200' : 'text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-200'
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ToggleButton;