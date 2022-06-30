import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calendar from "./Pages/Calendar/Calendar";
import Complete from "./Pages/Compleate-task/Complete";
import "./Pages/Css-file/All.css";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header";
import ToDo from "./To-do/ToDo";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="complete" element={<Complete />} />
        <Route path="toDo" element={<ToDo />} />
        <Route path="calendar" element={<Calendar />} />
      </Routes>
    </div>
  );
}

export default App;
