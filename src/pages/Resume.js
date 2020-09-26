import React from 'react';
import '../App.css';
import '../style/Resume.css';

function Resume(props) {
  return(

    <section id="resume">
      <div className="resume-container">

        <div className="education">
          <img src="./images/resume/education.png"
               alt="graduation hat logo"/>

        </div>
        <div className="education-details">
          <p>MA, International Relations</p>
          <p>Jackson School, University of Washington</p>
        </div>

        <div className="work">
          <img src="./images/resume/work.png"
               alt="briefcase logo"/>

        </div>
        <div className="work-details">
          <p>Account Manager, MIR Corporation</p>
          <p>International Travel Expert</p>
          <p>Seattle, WA</p>
        </div>

        <div className="stack">
          <img src="./images/resume/stack.png"
               alt="code on computer screen logo"/>
        </div>
          <ul className="stack-1">
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Java</li>
            <li>Git</li>
          </ul>
          <ul className="stack-2">
            <li>Bootstrap</li>
            <li>Redux</li>
            <li>D3.js</li>
            <li>React</li>
            <li>Node</li>
          </ul>
          <ul className="stack-3">
            <li>Web Design</li>
            <li>Database Design</li>
            <li>TDD</li>
            <li>Agile</li>
            <li>OOD</li>
          </ul>

        <div className="skills">
          <img src="./images/resume/skills.png"
               alt="logo of human juggling tasks"/>
        </div>
        <div className="skills-details">
          <p>Experienced project manager</p>
          <p>Client Sales</p>
        </div>
      </div>
    </section>

  );
}

export default Resume;
