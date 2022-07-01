import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://mysterious-tor-58361.herokuapp.com/allTask")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const updated = (id) => {
    navigate(`/toDo/${id}`);
  };
  const complete = (id, name, details) => {
    fetch("https://mysterious-tor-58361.herokuapp.com/complete", {
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
          swal({
            title: "Update Task Successfully!!",
            icon: "success",
            button: "OK!",
          });
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
              <p className="checkbox">
                <input
                  onClick={() => complete(task._id, task.name, task.details)}
                  type="checkbox"
                  name="checks"
                  className="cursor-pointer"
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
