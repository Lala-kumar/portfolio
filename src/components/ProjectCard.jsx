import React from "react";

const ProjectCard = ({ title, imgUrl, link }) => {
  return (
    <div className="project">
      <img src={imgUrl} alt={title} />
      <h1>{title}</h1>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button type="button">View</button>
      </a>
    </div>
  );
};

export default ProjectCard;
