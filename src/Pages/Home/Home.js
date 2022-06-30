import { FaArrowCircleRight } from "react-icons/fa";
const Home = () => {
  const addTask = (e) => {
    e.preventDefault();
    const taskName = e.target.tName.value;
    const taskDetails = e.target.details.value;

    console.log(taskName, taskDetails);
  };
  //   fetch("", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       title: "foo",
  //       body: "bar",
  //       userId: 1,
  //     }),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
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
    </div>
  );
};

export default Home;
