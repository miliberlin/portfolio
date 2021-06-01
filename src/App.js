import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function App() {
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
      <header className="App-header"></header>
    </div>
  );
}

export default App;
