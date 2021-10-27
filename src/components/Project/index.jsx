import React from "react";

export default function Project(props) {
  return (
    <div className="project">
      <img src={props.img} alt="Project portrait" className="project_img" />
      <h3>{props.title}</h3>
      <p>
        {props.description}
      </p>
    </div>
  );
}
