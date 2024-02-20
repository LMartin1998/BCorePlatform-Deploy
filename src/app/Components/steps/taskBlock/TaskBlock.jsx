import DropdownGeneral from "../../widgets/DropdDownGeneral";
import ToggleButtonGroup from "../../widgets/ToggleButtonGroup";
import MyDatePicker from "../../Datepicker";

const TaskBlock = ({data, handleChange, optionsDrop, id}) => {
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
    </>
  );
};

export default TaskBlock;
