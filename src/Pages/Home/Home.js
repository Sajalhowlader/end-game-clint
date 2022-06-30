import { FaArrowCircleRight } from "react-icons/fa";
const Home = () => {
  return (
    <div className="home-container">
      <h2>Add Your Task</h2>
      <div className="home-info">
        <label>Your Task Name</label>
        <input type="text" />
        <label>Your Task Details</label>
        <textarea type="text" />
        <p className="arrow">
          <FaArrowCircleRight />
        </p>
      </div>
    </div>
  );
};

export default Home;
