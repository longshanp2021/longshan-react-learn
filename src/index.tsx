import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Card } from "./card/card";
import reportWebVitals from "./reportWebVitals";
const save = (e: any) => {
  console.log(e.name);
};

const el = <Card name="longshan" age={22} gender="男" save={save} />;

ReactDOM.render(el, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
