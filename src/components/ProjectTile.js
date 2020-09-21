import React from 'react';
import '../App.css';
import '../style/ProjectTile.css';

function ProjectTile(props) {
  return(
    <div className="project-tile">
      <a href={props.link}
         target="_blank"
         rel="noopener noreferrer">
      <img src={props.imageLocation}
           alt={props.imageDescription}/>
        {props.title}</a>
    </div>
  );
}

export default ProjectTile;
