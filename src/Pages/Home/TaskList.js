import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allTask")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return (
    <div>
      <div className="allTasks-container px-5">
        {tasks.map((task) => (
          <div className="all-task-info">
            <p className="edit">
              <FaEdit />
            </p>
            <div className="taskTitle">Name: {task.name}</div>
            <hr />
            <div className="taskDetails">Details: {task.details}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;