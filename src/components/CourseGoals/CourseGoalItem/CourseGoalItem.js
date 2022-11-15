import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li
      // className="goal-item"
      onClick={deleteHandler}
      style={{
        margin: "1rem 0",
        background: "#8b005d",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
        color: "white",
        padding: "1rem 2rem",
        cursor: "pointer",
      }}
    >
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
