import "./App.css";
import NavList from "./NavList";

const App = () => {
  return (
    <>
      <NavList />
      <div className="main">
        <div className="container" id="home">
          <h1>Home</h1>
        </div>
        <div className="container" id="about">
          <h1>About</h1>
        </div>
        <div className="container" id="projects">
          <h1>Projects</h1>
        </div>
        <div className="container" id="contacts">
          <h1>Contacts</h1>
        </div>
      </div>
    </>
  );
};

export default App;
