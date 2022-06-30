import { useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";
import { FaArrowCircleRight, FaEdit } from "react-icons/fa";
const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [singleTask, setSingleTask] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/allTask")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  function MyVerticallyCenteredModal(props) {
    const updateTask = (e) => {
      e.preventDefault();
      const taskName = e.target.tName.value;
      const taskDetails = e.target.details.value;
      console.log(taskName);
      const URL = `http://localhost:5000/updateData?id=${singleTask._id}`;

      fetch(URL, {
        method: "PUT",
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
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
       >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form className="home-info modal-info" onSubmit={updateTask}>
            <label>Update Task Name</label>
            <input type="text" name="tName" />
            <label>Update Task Details</label>
            <textarea spellcheck="true" type="text" name="details" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button type="submit" className="arrow">
            <FaArrowCircleRight />
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <div>
      <h2 className="toolsTasks taskTitles">Update Your Task</h2>
      <div className="allTasks-container px-5">
        {tasks.map((task) => (
          <div className="all-task-info">
            <p className="edit" onClick={() => setModalShow(true)}>
              <FaEdit
                className="cursor-pointer"
                onClick={() => setSingleTask(task)}
              />
            </p>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
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
