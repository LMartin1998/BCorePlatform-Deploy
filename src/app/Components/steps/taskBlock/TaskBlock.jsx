import DropdownGeneral from "../../widgets/DropdDownGeneral";
import ToggleButtonGroup from "../../widgets/ToggleButtonGroup";
import MyDatePicker from "../../Datepicker";
import ButtonAddTask from "../../widgets/ButtonAddTask";
import { useState, useEffect, useContext } from "react";
import { GridContext } from "@/app/contexts/GridContext";

const TaskBlock = ({data, handleChange, optionsDrop, id}) => {
  
  const { handleDropdownChange, dropDownSelection } = useContext(GridContext);

  const [comments, setComments] = useState(0);
  const [textareaValues, setTextareaValues] = useState({});

  const handleAddTaskClick = () =>{
      setComments(prevCount => prevCount + 1);
  }
  
  const handleTextareaChange = (e, index) =>  {
    const {value} = e.target;
    setTextareaValues((prevValues) => ({
      ...prevValues,
      [index]: value,
      blockId: id
    }));
  }
  
  const renderTextAreas = () => {
      return Array.from({length: comments}, (_, index) =>(
        <textarea 
        key={index}
        value={textareaValues[index] || ''}
        onChange={(e) => handleTextareaChange(e, index)} 
        placeholder="Type a comment"
        className="rounded-lg px-4 mt-2 border border-gray-300 focus:outline-none focus:border-blue-500 shadow focus:shadow-outline"
        ></textarea>
      ));
  }
  
  useEffect(() => {
    console.log(textareaValues);
  }, [textareaValues]);


  return (
    <>
      <div className="flex justify-center items-center">
        <p className="text-gray-700 font-normal text-lg w-3/4">Block {id}</p>
        <MyDatePicker
          blockId={id}
        ></MyDatePicker>
      </div>
      <div className="container mx-auto my-2">
        <ToggleButtonGroup
          options={data}
          onChange={handleChange}
        ></ToggleButtonGroup>
      </div>
      <p className="text-gray-700 font-normal text-base mt-2">Type of task</p>
        <DropdownGeneral
          key={id}
          blockId={id}
          options={optionsDrop}
          buttonText="Choose a task"
          onSelectionChange={handleDropdownChange}
        ></DropdownGeneral> 
      {renderTextAreas()}
      <ButtonAddTask onClick={handleAddTaskClick}></ButtonAddTask>
    </>
  );
};

export default TaskBlock;
