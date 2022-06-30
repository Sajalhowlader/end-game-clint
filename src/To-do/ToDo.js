import { useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";
import { FaEdit } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
const ToDo = () => {
  const [tasks, setTasks] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/allTask")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <form className="home-info modal-info">
            <label>Update Task Name</label>
            <input type="text" name="tName" />
            <label>Update Task Details</label>
            <textarea type="text" name="details" />
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
              <FaEdit className="cursor-pointer" />
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
