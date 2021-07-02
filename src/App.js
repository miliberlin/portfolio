import projects from "./projects.json";
import ProjectDetail from "./components/ProjectDetail";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Skillset from "./components/Skillset";
import Game from "./components/Game";

function App() {
  let projectList = projects.map((project, i) => {
    return <ProjectDetail key={i} project={project} />;
  });
  return (
    <div className="App">
      <NavBar />
      {/* <header className="App-header"></header> */}
      <main>
        <section className="section" id="projects">
          <div className="container">
            <h2 className="title is-2">Projects</h2>
            <p className="subtitle">Check out what I've been up to</p>
          </div>
          <div className="container is-flex is-flex-direction-row is-flex-wrap-wrap is-justify-content-space-between is-align-content-flex-start">
            <div className="project-list columns">{projectList}</div>
          </div>
        </section>
        <section className="section" id="skillset">
          <div className="container">
            <Skillset />
          </div>
        </section>
        <section className="section" id="about">
          <div className="container">
            <h2 className="title is-2">About me</h2>
            <About />
          </div>
        </section>
        <section className="section" id="game">
          <div className="container">
            <Game />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
