import React from 'react';
import '../App.css';
import '../style/Resume.css';

function Resume(props) {
  return(

    <section id="resume">
      <div className="resume-container">
        <p className="education">Education:</p>
        <div className="education-details">
          <p>MA, International Relations</p>
          <p>Jackson School, University of Washington</p>
        </div>

        <p className="work">Work:</p>
        <div className="work-details">
          <p>Account Manager, MIR Corporation</p>
          <p>International Travel Expert</p>
          <p>Seattle, WA</p>
        </div>

        <p className="stack">Stack:</p>

        <ul className="stack-details">
          <li>JavaScript</li><li>HTML5</li><li>CSS3</li>
          <li>Web Design</li><li>Redux</li><li>D3.js</li>
          <li>React</li><li>Python</li><li>SQL</li>
          <li>Database Design</li><li>Java</li><li>TDD</li>
          <li>Bootstrap</li><li>Git</li><li>Agile</li>
          <li>OOD</li>
        </ul>


        <p className="skills">Skills:</p>
        <div className="skills-details">
          <p>Experienced project manager</p>
        </div>
      </div>
    </section>

  );
}

export default Resume;
