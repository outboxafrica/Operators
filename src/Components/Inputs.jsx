import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Inputs.css";

export function Inputs(props) {
  return (
    <div className="Inputs">
      <label htmlFor="">{props.label}</label>
      <TextField
        variant={props.variant}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
export function TextArea(props) {
  return (
    <div className="TextArea">
      <label htmlFor="">{props.label}</label>
      <textarea
        variant={props.variant}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        rows={props.rows}
        cols={props.cols}
      />
    </div>
  );
}
