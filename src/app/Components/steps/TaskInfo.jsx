import { useState } from "react";
import DropdownGeneral from "../widgets/DropdDownGeneral";
import Dropdown from "../widgets/Dropdown";
import ToggleButtonGroup from "../widgets/ToggleButtonGroup";

export default function TaskInfo(){
    const [optionsDrop, setoptionsDrop] = useState([]);

    const options = [
        { label: 'Mechanical', value: 'Mechanical' },
        { label: 'Electrical', value: 'Electrical' },
        { label: 'Inspections', value: 'Inspections' },
        { label: 'CleanUp', value: 'option4' },
        { label: 'Observations', value: 'option5' },
    ];

    const handleChange = (selectedOption) => {
        let dropDownOptions = [];
        
        switch (selectedOption){
            case 'Mechanical':
                dropDownOptions = [
                    { label: 'Option1', value: 'Option1' },
                    { label: 'Option2', value: 'Option2' },
                    { label: 'Option3', value: 'Option3' }
                ];
            break;
            case 'Electrical':
                dropDownOptions = [
                    { label: 'OptionA', value: 'OptionA' },
                    { label: 'OptionB', value: 'OptionB' }
                ];
            break;
            case 'Inspections':
                dropDownOptions = [
                    { label: 'OptionC', value: 'OptionC' },
                    { label: 'OptionD', value: 'OptionD' }
                ];
            break;
            default:
                dropDownOptions = [
                    { label: 'Option1', value: 'Option1' },
                    { label: 'Option2', value: 'Option2' },
                    { label: 'Option3', value: 'Option3' }
                ];
            break;
        }
        setoptionsDrop(dropDownOptions);
    };
    return(
        <div className="flex flex-col">
            <p className="text-gray-700 font-normal text-lg">Block PCS102</p>
            <div className="container mx-auto my-2">
                <ToggleButtonGroup
                    options={options} 
                    onChange={handleChange}
                >
                </ToggleButtonGroup>
            </div>
            <p className="text-gray-700 font-normal text-base">Task</p>
            <DropdownGeneral options={optionsDrop} buttonText='Choose a task'></DropdownGeneral>
        </div>
    );
}