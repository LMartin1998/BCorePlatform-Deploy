import DropdownGeneral from "../../widgets/DropdDownGeneral";
import ToggleButtonGroup from "../../widgets/ToggleButtonGroup";
import MyDatePicker from "../../Datepicker";
import ButtonAddTask from "../../widgets/ButtonAddTask";
import { useState } from "react";

const TaskBlock = ({data, handleChange, optionsDrop, id}) => {
  const [comments, setComments] = useState(0);
  const handleAddTaskClick = () =>{
      setComments(prevCount => prevCount + 1);
  } 
  const renderTextAreas = () => {
      return Array.from({length: comments}, (_, index) =>(
        <textarea 
        key={index} 
        placeholder="Type a comment"
        className="rounded-lg px-4 mt-2 border border-gray-300 focus:outline-none focus:border-blue-500 shadow focus:shadow-outline"
        ></textarea>
      ));
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <p className="text-gray-700 font-normal text-lg w-3/4">Block {id}</p>
        <MyDatePicker></MyDatePicker>
      </div>
      <div className="container mx-auto my-2">
        <ToggleButtonGroup
          options={data}
          onChange={handleChange}
        ></ToggleButtonGroup>
      </div>
      <p className="text-gray-700 font-normal text-base mt-2">Type of task</p>
      <DropdownGeneral
        options={optionsDrop}
        buttonText="Choose a task"
      ></DropdownGeneral>
      {renderTextAreas()}
      <ButtonAddTask onClick={handleAddTaskClick}></ButtonAddTask>
    </>
  );
};

export default TaskBlock;
