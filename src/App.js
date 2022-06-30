import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import './Pages/Css-file/All.css';
import Header from "./Pages/Shared/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
