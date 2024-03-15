import "./styles/Hero.css";
//ANIMATION LIBRARY
import { Fade } from "react-reveal";

const Hero = () => {
  return (
    <div className="max-cont">
      <div className="landing-hero">
        <div className="left-hero">
          <Fade duration={1000} left>
            <h1>教育界數位推手</h1>
          </Fade>
          <Fade delay={200} duration={1000} left>
            <p>
              從師生及家長溝通 CRM 結合數位經營 ERP
              工具、實體教材及數位學習資源到 24HR
              家教協助，幫助您系統化管理每一位學生及家長，同時提供給學生更多元的學習及家教資源！
            </p>
          </Fade>
          <Fade delay={400} duration={1000} left>
            <a href="#products" className="cta-btn">
              了解產品
            </a>
          </Fade>
        </div>
        <Fade delay={1000}>
          <img src="/assets/landing-hero.png" alt="" />
        </Fade>
      </div>
    </div>
  );
};

export default Hero;
