
import React from "react";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <h1>
          Hello, I am a vending machine. What would you like to eat today?
        </h1>
        <Routes>
          <Route
            exact
            path="/soda"
            element={
              <React.Fragment>
                <Soda />
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/Chips"
            element={
              <React.Fragment>
                <Chips />
              </React.Fragment>
            }
          />
          <Route
            exact
            path="/sardines"
            element={
              <React.Fragment>
                <Sardines />
              </React.Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

