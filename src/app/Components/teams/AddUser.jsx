import styles from "@/app/styles/EntriesTeams.module.css";

export default function AddUser({ setNewUser }) {
  return (
    <div className={styles.slide_top}>
      <div
        className="flex justify-center items-center rounded-lg"
        onClick={(e) => {
          e.stopPropagation();
          setNewUser(false);
        }}
      >
        <button className="bg-transparent">Close</button>
      </div>
      <div className="w-full h-full rounded-lg shadow-lg bg-white flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <p>Add a new User</p>
        </div>
        <div className="w-11/12 h-16 border-2 border-black rounded-lg bg-gray-100 m-2">
          <label>Name: </label>
          <input className="rounded-lg bg-white"></input>
        </div>
      </div>
    </div>
  );
}
