import './App.css'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Socials from "./components/Socials";
function App() {

  return (
    <div className="App">
      <Header />
      <hr></hr>
      <h2 id="title">
        About
      </h2>
      <hr></hr>
      <div id="list">
        <p>Welcome to my Portfolio</p>
        <p>My name is Sophia Scott</p>
        <p>I am a web developer with a background in computer systems and computer networking</p>
      </div>
      <Education />
      <Projects />
      <Socials />
      <Footer />

    </div>
  )
}

export default App
