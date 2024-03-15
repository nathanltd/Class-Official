import "./styles/Partner.css";
import { Fade } from "react-reveal";

const Partner = () => {
  return (
    <div className="partner">
      <div className="top-partner">
        <div>
          <Fade collapse left>
            <h1 className="heading">提供豐富學習資源的夥伴</h1>
            <h2 className="sub">
              多元且優惠的實體教材及免費課外電子書，輔助教育機構提供學生完整學習資源！
            </h2>
          </Fade>
        </div>
        <Fade top>
          <img src="/assets/home-together.png" alt="" />
        </Fade>
      </div>
      <div className="bottom-partner">
        <Fade duration={500} left>
          <div className="partner-box">
            <img src="/assets/partner (2).png" alt="" />
            <h3>實體教科書購買</h3>
            <p>提供國高中小各年級教科書</p>
          </div>
        </Fade>
        <Fade bottom duration={500} delay={1000}>
          <div className="partner-box">
            <img src="/assets/partner (3).png" alt="" />
            <h3>豐富的課外電子書</h3>
            <p>超過1000本課外電子書可閱讀</p>
          </div>
        </Fade>
        <Fade right duration={500} delay={500}>
          <div className="partner-box">
            <img src="/assets/partner (1).png" alt="" />
            <h3>跨裝置閱讀</h3>
            <p>手機、平版、電腦皆可使用</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Partner;
