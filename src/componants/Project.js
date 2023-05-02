import React from "react";
import Main from "../Main";
import "../CSS/projects.css";
import ProjectBox from "./ProjectBox" ;
import CardsData from "./Data";

const Project = () => {
  return (
    <>
      <Main />
      <div id="tab4-body" className="tabs">

        {
          CardsData.map( value =>
            <ProjectBox img={value.img} key={value.id} title={value.title} />
          )
        }

      </div>
    </>
  );
};


export default Project;
