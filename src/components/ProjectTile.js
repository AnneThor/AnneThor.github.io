import React from 'react';
import '../App.css';
import '../style/ProjectTile.css';

function ProjectTile(props) {
  return(
    <div className="project-tile">
      <a href={"https://annethor.github.io/" + props.link}
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
