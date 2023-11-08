import React from "react";
import ProjectCard from "./ProjectCard";

import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/projImg3.png";

const Project = () => {
  const projects = [
    {
      title: "E-com Website ",
      description:
        "An online marketplace offering a diverse range of products, providing seamless shopping experiences, and secure transactions for customers worldwide.",
      imgUrl: projImg1,
      link: "https://ecommerce-gamma-silk.vercel.app/"
    },
    {
      title: "Food Order App",
      description:
        "Your go-to destination for convenient online food ordering, delivering diverse flavors to your doorstep with just a click.",
      imgUrl: projImg2,
      link: "https://food-order-topaz.vercel.app/"
    },
    {
      title: "Expense Tracker",
      description:
        "Effortlessly manage your finances on the go with our user-friendly expense tracker app.",
      imgUrl: projImg3,
      link:"https://expense-tracker-lala-kumar.vercel.app/"
    },
  ];
  return (
    <section className="projects" id="project">
      <h1>Projects</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
        eligendi sed nihil cupiditate minus fugiat rerum assumenda voluptas quod
        culpa, illo expedita maxime aspernatur sequi sunt error nostrum magnam
        quidem.
      </p>

      <div className="projectList">
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project}  />;
        })}
      </div>
    </section>
  );
};

export default Project;
