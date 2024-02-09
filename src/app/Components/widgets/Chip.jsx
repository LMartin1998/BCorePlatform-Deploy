const Chip = ({label}) => {
    return (  
        <div className="inline-flex items-center px-3 py-1 bg-white border border-gray-300 rounded-full text-sm leading-5 font-medium text-gray-700">
             <span>{label}</span>
        </div>
    );
}
 
export default Chip;