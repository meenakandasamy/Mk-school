

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Uicomponents/Login";
function App() {
  return (
    <div className="App">
      <Router  
      // path="/coffee"
      //  basename="/mk school/"
     
       >
        <Routes>
          <Route exact path="/" element={<Login/>} />
         
          </Routes>
          </Router>
    </div>
  );
}

export default App;
