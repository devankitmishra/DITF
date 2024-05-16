import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";




const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar/>
        <Hero/>
        </section>
      <section id="Zero Two"><Parallax type="services"/></section>
      <section><Services/></section>
      <section id="Hiro"><Parallax type="portfolio"/></section>
      <section id="About"><Portfolio/></section>
    

  </div>
  );
};

export default App;
