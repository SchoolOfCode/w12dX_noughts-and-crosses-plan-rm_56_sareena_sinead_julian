import React from "react";
import ReactDOM from "react-dom";
import Game from "./Components/Game";
import reportWebVitals from "./reportWebVitals";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <Game />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your Game, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
