import { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useParams } from "react-router-dom";

const UpdateItems = () => {
  const [update, setUpdate] = useState({});
  const { toId } = useParams();
  useEffect(() => {
    const url = `http://localhost:5000/allTask/${toId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUpdate(data));
  }, [toId]);

  const updateTask=(e)=>{
    e.preventDefault()
    const taskName = e.target.tName.value;
    const taskDetails = e.target.details.value;

    fetch(`http://localhost:5000/allTask/${toId}`, {
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
          alert("Update successfully");
        }
      });
  }
  return (
    <div>
          
      <div className="all-task-info">
        <div className="taskTitle">Name: {update.name}</div>
        <hr />
        <div className="taskDetails">Details: {update.details}</div>
      </div>

      <h2 className="toolsTasks taskTitles">Update Your Task</h2>
      <form className="home-info" onSubmit={updateTask}>
        <label>Update Task Name</label>
        <input type="text" name="tName" />
        <label>Update Task Details</label>
        <textarea type="text" name="details" />
        <button type="submit" className="arrow">
          <FaArrowCircleRight />
        </button>
      </form>
    </div>
  );
};

export default UpdateItems;
