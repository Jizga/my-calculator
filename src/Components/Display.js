import React from "react";
import "./Display.css";

export default function Display(props) {
  return (
    <div>
      <p id="display">{props.screen}</p>
    </div>
  );
}
