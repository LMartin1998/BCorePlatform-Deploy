import { useState } from "react";
import DropdownGeneral from "../widgets/DropdDownGeneral";
import ToggleButtonGroup from "../widgets/ToggleButtonGroup";
import ButtonAddTask from "../widgets/buttonAddTask";
import MyDatePicker from "../Datepicker";

export default function TaskInfo(){
    const [optionsDrop, setoptionsDrop] = useState([]);

    const data = [
        { label: 'Mechanical', value: 'Mechanical' },
        { label: 'Electrical', value: 'Electrical' },
        { label: 'Inspections', value: 'Inspections' },
        { label: 'CleanUp', value: 'CleanUp' },
        { label: 'Observations', value: 'Observations' },
    ];

    const mechanicalTasks = [
        { label: 'Pile Pounding', value: 'Pile Pounding', parent: 'Mechanical'},
        { label: 'Pile Remediation', value: 'Pile Remediation', parent: 'Mechanical'},
        { label: 'Pile Caps Installation', value: 'Pile Caps Installation', parent: 'Mechanical'},
        { label: 'Pre-Installing Bearings', value: 'Pre-Installing Bearings', parent: 'Mechanical'} 
    ];

    const electricalTasks = [
        { label: '10KV Meg Testing Before Landing MV-DC', value: '10KV Meg Testing Before Landing MV-DC', parent: 'Electrical'},
        { label: 'MEG TEST First lift', value: 'MEG TEST First lift', parent: 'Electrical'},
        { label: 'Grounding', value: 'Grounding', parent: 'Electrical' },
        { label: 'DC/MV Road Crossing', value: 'DC/MV Road Crossing', parent: 'Electrical'}
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
            <div className="flex justify-center items-center">
                <p className="text-gray-700 font-normal text-lg w-3/4">Block PCS102</p>
                <MyDatePicker></MyDatePicker>
            </div>
            <div className="container mx-auto my-2">
                <ToggleButtonGroup
                    options={data} 
                    onChange={handleChange}
                >
                </ToggleButtonGroup>
            </div>
            <p className="text-gray-700 font-normal text-base mt-2">Type of task</p>
            <DropdownGeneral options={optionsDrop} buttonText='Choose a task'></DropdownGeneral>
            <ButtonAddTask></ButtonAddTask>
        </div>
    );
}