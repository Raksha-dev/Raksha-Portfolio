import "./App.css";
import About from "./components/about";
import Banner from "./components/banner";
import ChatBot from "./components/chatBot";
import Contact from "./components/contact";
import Experience from "./components/experience";
import Header from "./components/header";
import Project from "./components/project";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <ChatBot />
    </>
  );
}

export default App;
