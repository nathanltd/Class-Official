import "./styles/Hero.css";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "var(--purple)" }} className="class-hero">
      <Fade>
        <img src="/assets/book.png" alt="" />
      </Fade>
      <Fade bottom>
        <h1>CLASS 書店</h1>
      </Fade>
    </div>
  );
};

export default Hero;
