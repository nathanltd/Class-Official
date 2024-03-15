import About from "./About";
import Contact from "./Contact";
import Digital from "./Digital";
import Hero from "./Hero";
import Products from "./Products";

const Landing = () => {
  return (
    <div className="container mt-header">
      <div
        className="container"
        style={{ background: "#FBFBFB", width: "100%" }}
      >
        <Hero />
        <Digital />
      </div>
      <Products />
      <About />
      <Contact />
    </div>
  );
};

export default Landing;
