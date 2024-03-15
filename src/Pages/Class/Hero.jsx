import "./styles/Hero.css";
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <div style={{ backgroundColor: "var(--green)" }} className="class-hero">
      <Fade>
        <img src="/assets/home.png" alt="" />
      </Fade>
      <Fade bottom>
        <h1>CLASS 班級</h1>
      </Fade>
    </div>
  );
};

export default Hero;
