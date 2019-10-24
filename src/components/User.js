import React from "react";

export default function User(props) {
  // Get the data passed in from the props
  // Use it in this component

  return (
    <div
      style={{
        border: "2px solid black",
        margin: "10px auto",
        padding: "10px"
      }}
    >
      <p>
        <strong>Name: </strong>
        {/* Name here */}
      </p>
      <p>
        <strong>Role: </strong>
        {/* Role here */}
      </p>
      <p>
        <strong>Hobies: </strong>
        {/* Hobbies here */}
      </p>
    </div>
  );
}
