const Chip = ({label, background}) => {

    var color = '';
    switch (background) {
        case 'Mechanical':
            color = 'red';        
            break;
        case 'Electrical':
            color = 'blue';
            break;
        default:
            color = 'white';
            break;
    }
    
    return (  
        // <div className="inline-flex items-center px-3 py-1 bg-white border border-gray-300 rounded-full text-sm leading-5 font-medium text-gray-700">
        <div className={`inline-flex items-center px-3 py-1 bg-${color}-200 border border-gray-300 rounded-full text-sm leading-5 font-medium text-gray-700`}>
             <span>{label}</span>
        </div>
        
    );
}
 
export default Chip;