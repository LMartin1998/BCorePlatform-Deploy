import { useState, useContext, useEffect } from "react";
import { GridContext } from "@/app/contexts/GridContext";
import TaskBlock from "./taskBlock/TaskBlock";

export default function TaskInfo(){

    const { selectedBlocks } = useContext(GridContext);

    // useEffect(()=> {console.log(selectedBlocks)},[selectedBlocks]);
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
                    { label: 'OptionC', value: 'OptionC', parent: 'Inspections'},
                    { label: 'OptionD', value: 'OptionD', parent: 'Inspections'}
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
            { selectedBlocks.map(id => (
                <TaskBlock
                    key={id}
                    data={data}
                    handleChange={handleChange}
                    optionsDrop={optionsDrop}
                    id={id}
                >
                </TaskBlock>
            ))}
        </div>
    );
}