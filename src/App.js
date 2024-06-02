import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

//Components
import HomePage from "./Pages/Home";
import Dashboard from "./components/Common/Dashboard/Dashboard";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Common/Header/Header";



function App() {
  return (
    <div className="App">
        <ToastContainer />
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;