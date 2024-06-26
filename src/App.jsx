import Test from "./Test";
import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="About"><Parallax type="services"/></section>
    <section id="Skills" style={{background: "linear-gradient(180deg, #505064, #111132)"}}>Skills</section>
    <section id="Projects"><Projects/></section>
    <section id="Contact">Contact</section>

    {/* <Test></Test>
    <Test></Test> */}
  </div>;
};

export default App;
