import clsx from 'clsx';

const ToggleButton = ({ label, active, onClick }) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center px-4 py-2 border border-slate-200 text-sm leading-5 font-medium rounded-sm focus:outline-none focus:shadow-outline-indigo transition ease-in-out duration-150',
        active ? 'text-indigo-700 bg-indigo-300 hover:bg-indigo-200 focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-200' : 'text-gray-700 bg-gray-100 hover:bg-gray-200 focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-200'
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ToggleButton;

