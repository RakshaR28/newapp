import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
  <div class="header">
  <h1 style={{color:"black",textAlign:"center",fontSize:"40px", background: "white"}}>
    Hello World!</h1>
  <p style={{color:"black",textAlign:"center", background: "white"}}>Fill the below form to join the club.</p>
 </div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);