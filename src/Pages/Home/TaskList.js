import { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/allTask")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return <div>Task length:{tasks.length}</div>;
};

export default TaskList;
