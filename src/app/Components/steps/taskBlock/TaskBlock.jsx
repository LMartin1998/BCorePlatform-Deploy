import DropdownGeneral from "../../widgets/DropdDownGeneral";
import ToggleButtonGroup from "../../widgets/ToggleButtonGroup";
import MyDatePicker from "../../Datepicker";
import ButtonAddTask from "../../widgets/ButtonAddTask";
import { useState, useContext, useEffect } from "react";
import { GridContext } from "@/app/contexts/GridContext";

const TaskBlock = ({data, handleChange, optionsDrop, id}) => {
  
  const { handleDropdownChange, dropDownSelection, handleTextareaChangeId, textareaValuesId  } = useContext(GridContext);

  const [comments, setComments] = useState([]);

  const handleAddTaskClick = () =>{
      setComments((prevComments) => [...prevComments, comments.length]);
  }
  const [textareaValues, setTextareaValues] = useState({}); 
  const handleTextareaChange = (e, index, id) =>  {
    const {value} = e.target;
    setTextareaValues((prevValues) => ({
      ...prevValues,
      // [id]: value,
      [index]: value
    }));
  }
  
  const renderTextAreas = () => {
    return comments.map((index) =>(
      <textarea 
        key={index}
        value={textareaValues[index] || ''}
        onChange={(e) => handleTextareaChange(e, index, id)} 
        placeholder="Type a comment"
        className="rounded-lg px-4 mt-2 border border-gray-300 focus:outline-none focus:border-blue-500 shadow focus:shadow-outline"
      ></textarea>
    ));
  }

  // Effect for test dropDownSelection
  useEffect(()=>{
    console.log(dropDownSelection);
  },[handleDropdownChange])

  useEffect(()=>{
    handleTextareaChangeId(id, textareaValues); 
  },[textareaValues])

  // Effect for test textareaValues
  useEffect(()=>{
    console.log(textareaValuesId);
  },[handleTextareaChangeId]);

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
