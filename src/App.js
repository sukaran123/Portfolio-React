import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import PhoneStructure from "./pages/PhoneStructure";
// import ResumePage from "./pages/ResumePage";
// import AppPage from "./pages/AppPage";
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <PhoneStructure />
      {/* <ResumePage/> */}
    </Router>
  );
}

export default App;
