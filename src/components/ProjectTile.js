import React from 'react';
import '../App.css';
import '../style/ProjectTile.css';

function ProjectTile(props) {

  const link = props.link ? "https://annethor.github.io/" + props.link  : props.altLink

  return(
    <div className="project-tile">
      <a href={link}
         target="_blank"
         rel="noopener noreferrer">
         <img src={"./images/project-tiles/" + props.imageLocation}
              alt={props.imageDescription}/>
         {props.title}
      </a>
    </div>
  );
}

export default ProjectTile;
