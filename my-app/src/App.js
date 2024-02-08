import "./App.css";

import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import Alert from "./Components/Alert";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`); // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  // Toggle  Dark Mode
  const toggleMode = () => {
    if (mode === `light`) {
      setMode(`dark`);
      document.body.style.backgroundColor = "#020334";
      showAlert(`Dark mode has been enabled`, "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode(`light`);
      document.body.style.backgroundColor = "white";
      showAlert(`Light mode has been enabled`, "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />
        <div className="container my-3" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading=" Try TextUtils - Word Counter, Character Counter,Remove extra spaces"
                  mode={mode}/>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
