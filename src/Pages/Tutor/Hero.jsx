import "./styles/Hero.css";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "var(--orange)" }} className="class-hero">
      <Fade>
        <img src="/assets/pencil.png" alt="" />
      </Fade>
      <Fade bottom>
        <h1>CLASS 問答</h1>
      </Fade>
    </div>
  );
};

export default Hero;
