import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:5000/allTask")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const updated = (id) => {
    navigate(`/toDo/${id}`);
  };
  return (
    <div>
      <h2 className="toolsTasks taskTitles"> My All Task</h2>
      <div className="allTasks-container px-5">
        {tasks.map((task) => (
          <div className="all-task-info">
            <p className="edit">
              <FaEdit
                className="cursor-pointer"
                onClick={() => updated(task._id)}
              />
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

export default ToDo;
