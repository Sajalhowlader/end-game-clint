import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaEdit } from "react-icons/fa";
const TaskList = (props) => {
  const [tasks, setTasks] = useState([]);
  const [modalShow, setModalShow] =useState(false);
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
        <Modal.Header closeButton className="opp">
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <div>
      <div className="allTasks-container px-5">
        
        {tasks.map((task) => (
          <div className="all-task-info">
            <p className="edit"  onClick={() => setModalShow(true)}>
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
<div class="modal-dialog modal-dialog-scrollable">
  ...
</div>

    </div>
  );
};

export default TaskList;
