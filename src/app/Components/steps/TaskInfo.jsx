import { useState } from "react";
import DropdownGeneral from "../widgets/DropdDownGeneral";
import Dropdown from "../widgets/Dropdown";
import ToggleButtonGroup from "../widgets/ToggleButtonGroup";

export default function TaskInfo(){
    const [optionsDrop, setoptionsDrop] = useState([]);
    const [inputLabel, setInputLabel] = useState('');

    const data = [
        { label: 'Mechanical', value: 'Mechanical' },
        { label: 'Electrical', value: 'Electrical' },
        { label: 'Inspections', value: 'Inspections' },
        { label: 'CleanUp', value: 'CleanUp' },
        { label: 'Observations', value: 'Observations' },
    ];

    const mechanicalTasks = [
        { label: 'Pile Pounding', value: 'Pile Pounding'},
        { label: 'Pile Remediation', value: 'Pile Remediation'},
        { label: 'Pile Caps Installation', value: 'Pile Caps Installation'},
        { label: 'Pre-Installing Bearings', value: 'Pre-Installing Bearings'} 
    ];

    const electricalTasks = [
        { label: '10KV Meg Testing Before Landing MV-DC', value: '10KV Meg Testing Before Landing MV-DC'},
        { label: 'MEG TEST First lift', value: 'MEG TEST First lift'},
        { label: 'Grounding', value: 'Grounding' },
        { label: 'DC/MV Road Crossing', value: 'DC/MV Road Crossing'}
    ]; 

    const handleChange = (selectedOption) => {
        let dropDownOptions = [];
        
        switch (selectedOption){
            case 'Mechanical':
                dropDownOptions = mechanicalTasks;
            break;
            case 'Electrical':
                dropDownOptions = electricalTasks;
            break;
            case 'Inspections':
                dropDownOptions = [
                    { label: 'OptionC', value: 'OptionC' },
                    { label: 'OptionD', value: 'OptionD' }
                ];
            break;
            default:
                dropDownOptions = [];
            break;
        }
        setoptionsDrop(dropDownOptions);
    };
    return(
        <div className="flex flex-col">
            <p className="text-gray-700 font-normal text-lg">Block PCS102</p>
            <div className="container mx-auto my-2">
                <ToggleButtonGroup
                    options={data} 
                    onChange={handleChange}
                >
                </ToggleButtonGroup>
            </div>
            <p className="text-gray-700 font-normal text-base mt-2">Task</p>
            <DropdownGeneral options={optionsDrop} buttonText='Choose a task'></DropdownGeneral>
            <p className="text-gray-700 font-normal text-base mt-2">Quantity or Comment</p> {/*Quantity or Comment*/}
            <div className="w-full max-w-xs">
                <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    type="number"
                    placeholder="type the quantity"
                    >
                </input>
            </div>
        </div>
    );
}