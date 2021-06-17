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
        <section class="section" id="projects">
          <div class="container">
            <h1 class="title">Projects</h1>
            <p class="subtitle">Check out what I've been up to</p>
            <div>{projectList}</div>
          </div>
        </section>
        <section class="section" id="about">
          <div class="container">
            <h1 class="title">About me</h1>
            {/* <p class="subtitle">Check out what I've been up to</p> */}
            <About />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
