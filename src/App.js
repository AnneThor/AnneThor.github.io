import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ProjectTile from './components/ProjectTile.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div className="App">
        <Header />

          <section id="home">
            <h1>Anne Thorsteinson</h1>
            <p>Full Stack Web Developer | Project Manager | Travel Expert</p>
          </section>

          <div margin="auto"></div>

          <section id="projects">
            <div className="spacer"> </div>
            <h2>Web Development Projects</h2>
            <div className="projects-grid">
              <ProjectTile link="https://annethor.github.io/javascript-calculator/"
                           imageLocation="./images/project-tiles/javascript-calculator.png"
                           imageDescription="picture of javascript calculator"
                           title="Javascript Calculator" />
              <ProjectTile link="https://annethor.github.io/drum-machine/"
                           imageLocation="./images/project-tiles/drum-machine.png"
                           imageDescription="drum machine overview"
                           title="Drum Machine" />
              <ProjectTile link="https://annethor.github.io/markdown-previewer/"
                           imageLocation="./images/project-tiles/markdown-previewer.png"
                           imageDescription="overview of markdown input-output layout"
                           title="Markdown Previewer" />
              <ProjectTile link="https://annethor.github.io/random-simpsons-quote/"
                           imageLocation="./images/project-tiles/random-quote.png"
                           imageDescription="display of random quote with simpsons character"
                           title="Quote Generator" />
              <ProjectTile link="https://annethor.github.io/tic-tac-toe/"
                           imageLocation="./images/project-tiles/tic-tac-toe.png"
                           imageDescription="empty tic tac toe game layout"
                           title="Tic Tac Toe" />
              <ProjectTile link="https://annethor.github.io/TributePage/"
                           imageLocation="./images/project-tiles/tribute-page.png"
                           imageDescription="Cover Page of Tribute Page, photo and captions of Ray Bradbury"
                           title="Ray Bradbury Page" />
              <div className="project-tile">
                <a href="../TributePage/TributePage.html" target="_blank">
                <img src="./images/ProductPage.png" alt="Cover page of a product page" />
                  Product Page</a>
              </div>
              <div className="project-tile">
                <a href="../ProductPage/SurveyPage.html" target="_blank">
                <img src="./images/SurveyPage.png" alt="Cover page of a survey page" />
                  Survey Page</a>
              </div>
              <div className="project-tile">
                <a href="../ProductPage/TechClone.html" target="_blank">
                <img src="./images/TechClone.png" alt="Cover page of a technical documentation page" />
                  Technical Documentation</a>
              </div>
            </div>
          </section>

          <Footer />
        </div>

    );
  }
}

export default App;
