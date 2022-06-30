import { FaArrowCircleRight } from "react-icons/fa";
import TaskList from "./TaskList";
const Home = () => {
  const addTask = (e) => {
    e.preventDefault();
    const taskName = e.target.tName.value;
    const taskDetails = e.target.details.value;

    fetch("http://localhost:5000/addTask", {
      method: "POST",
      body: JSON.stringify({
        name: taskName,
        details: taskDetails,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("add successfully");
        }
      });
  };
  return (
    <div className="home-container">
      <h2>Add Your Task</h2>

      <form className="home-info" onSubmit={addTask}>
        <label>Your Task Name</label>
        <input type="text" name="tName" />
        <label>Your Task Details</label>
        <textarea type="text" name="details" />
        <button type="submit" className="arrow">
          <FaArrowCircleRight />
        </button>
      </form>
      <h2>Your Task List</h2>
      <TaskList />
    </div>
  );
};

export default Home;
