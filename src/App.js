import projects from "./projects.json";
import ProjectDetail from "./components/ProjectDetail";
import About from "./components/About";
import NavBar from "./components/NavBar";

function App() {
  let projectList = projects.map((project) => {
    return <ProjectDetail project={project} />;
  });
  return (
    <div className="App">
      <NavBar />
      {/* <header className="App-header"></header> */}
      <main>
        <section className="section" id="projects">
          <div className="container">
            <h1 className="title">Projects</h1>
            <p className="subtitle">Check out what I've been up to</p>
            <div cla>{projectList}</div>
          </div>
        </section>
        <section className="section" id="about">
          <div className="container">
            <h1 className="title">About me</h1>
            {/* <p className="subtitle">Check out what I've been up to</p> */}
            <About />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
