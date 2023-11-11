import { useEffect, useState } from "react";
import "./App.css";
import BirdsList from "./BirdsList";
import FetchBirds from "./FetchBirds";
import InputTest from "./InputTest";
import Navbar from "./NavBar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ListPits from "./ListPits";
import ListHealthChecks from "./ListHealthChecks";
import ListTransmitters from "./ListTransmitters";

const App = () => {
  const [birds, setBirds] = useState(null);

  console.log("running");

  useEffect(() => {
    fetch("http://localhost:8080/api/kiwis/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBirds(data);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<FetchBirds />}></Route>
          <Route path="/pits" element={<ListPits />}></Route>
          <Route path="/healthchecks" element={<ListHealthChecks />}></Route>
          <Route path="/transmitters" element={<ListTransmitters />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
