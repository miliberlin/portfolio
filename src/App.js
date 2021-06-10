import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import projects from "./projects.json";
import ProjectDetail from "./components/ProjectDetail";
import About from "./components/About";

function App() {
  let projectList = projects.map((project) => {
    return <ProjectDetail project={project} />;
  });
  return (
    <div className="App">
      <nav>
        <ul>
          <li>About</li>
          <li>Skillset</li>
          <li>Projects</li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
        </ul>
      </nav>
      {/* <header className="App-header"></header> */}
      <main>
        <div id="projects">{projectList}</div>
        <div className="about">
          <About />
        </div>
      </main>
    </div>
  );
}

export default App;
