export default function TeamsDatePicker({ date, updateDate }) {
  return (
    <div className="w-full rounded-md flex flex-col justify-center items-center">
      <ReactDatePicker
        selected={date}
        onChange={updateDate}
        dateFormat={"dd/MM/yyyy"}
        className="mt-1 mb-1 p-2 w-full border rounded-md text-center"
        startDate={date}
      ></ReactDatePicker>
    </div>
  );
}
