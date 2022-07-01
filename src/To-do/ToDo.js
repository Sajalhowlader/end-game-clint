import { useEffect, useState } from "react";
import { FaCheckCircle, FaEdit } from "react-icons/fa";
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
  const complete = (id, name, details) => {
    fetch("http://localhost:5000/complete", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        name: name,
        details: details,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          alert("add complete task");
        }
      });
  };
  return (
    <div>
      <h2 className="toolsTasks taskTitles"> My All Task</h2>
      <div className="allTasks-container px-5">
        {tasks.map((task) => (
          <div className="all-task-info">
            <p className="edit">
              <p className="text-success">
                <FaCheckCircle
                  onClick={() => complete(task._id, task.name, task.details)}
                />
              </p>
              <p>
                <FaEdit
                  className="cursor-pointer"
                  onClick={() => updated(task._id)}
                />
              </p>
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
