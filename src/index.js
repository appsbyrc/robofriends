import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import Card from "./Card";
import Cardlist from './Cardlist';
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { robots } from "./robots";



ReactDOM.render(
    <Cardlist robots={robots} />
    , document.getElementById("root")
);

reportWebVitals();

// const root = ReactDOM.createRoot(<Card />, document.getElementById('root'));
// root.render(
//     <React.StrictMode>

//     </React.StrictMode>
// );
