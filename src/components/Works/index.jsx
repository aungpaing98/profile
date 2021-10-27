import { useState } from "react";

import Project from "../Project";

export default function Works() {
  const [projects, setProjects] = useState(() => [
    {
      id: 0,
      img: "/images/car.jpg",
      title: "Automated Lane Detection with Computer Vision",
      description:
        "I participated in this project as the computer vision engineer and take part in tunning the vision model.",
    },
    {
      id: 1,
      img: "/images/car.jpg",
      title: "Automated Lane Detection with Computer Vision",
      description:
        "I participated in this project as the computer vision engineer and take part in tunning the vision model.",
    },
    {
      id: 2,
      img: "/images/car.jpg",
      title: "Automated Lane Detection with Computer Vision",
      description:
        "I participated in this project as the computer vision engineer and take part in tunning the vision model.",
    },
    {
      id: 3,
      img: "/images/car.jpg",
      title: "Automated Lane Detection with Computer Vision",
      description:
        "I participated in this project as the computer vision engineer and take part in tunning the vision model.",
    },
  ]);
  return (
    <>
      <div className="section">
        <h2 className="subtitle">Works</h2>
        <div className="works">
          {projects.map((project) => {
              return <Project key={project.id} {...project}/>
          })}
        </div>
      </div>
    </>
  );
}
