const Chip = ({label, background}) => {

    let color = '';
    switch (background) {
        case 'Mechanical':
            color = 'rgb(254, 202, 202, 1)';        
            break;
        case 'Electrical':
            color = 'rgb(191, 219, 254, 1)';
            break;
        case 'Inspections':
            color = 'rgb(254, 240, 138, 1)';
            break;
        default:
            color = 'white';
            break;
    }
    const chipStyle = {
        background: color
    }
    return (  
        <div style={chipStyle} className={`inline-flex items-center bg-ye px-3 py-1 border border-gray-300 rounded-full text-sm leading-5 font-medium text-gray-700`}>
            <span>{label}</span>
        </div>
    );
}
 
export default Chip;