import "./styles/Help.css";
import { Fade } from "react-reveal";

const Help = () => {
  return (
    <div className="container help-cont">
      <img src="/assets/book1.png" alt="" className="book book1" />
      <img src="/assets/book2.png" alt="" className="book book2" />
      <div className="max-cont">
        <Fade collapse top>
          <h1 className="heading">幫助學生解決課業上所有疑問</h1>
          <h2 className="sub">
            提供學生即時尋找解答的家教資源，不管何時在課業上遇到難題都可透過平台尋求協助！
          </h2>
        </Fade>
        <div className="help-row">
          <Fade left>
            <div className="help-box">
              <img src="/assets/help1.png" alt="" />
              <Fade collapse delay={500}>
                <h3>尋找解答</h3>
                <p>
                  不管你即將面臨會考、學測，還是指考，平台上都有相關的討論區讓你備考不緊張！若在課業上有任何疑難雜症，也都可以透過平台的即時媒合，讓你在最短的時間內，得到最完整且詳細的解答。
                </p>
              </Fade>
            </div>
          </Fade>
          <Fade right>
            <div className="help-box">
              <img src="/assets/help2.png" alt="" />
              <Fade collapse delay={500}>
                <h3>提供解答</h3>
                <p>
                  若你已經具備某方面的知識，你可以申請成為家教，協助學生在課業上的各種學習問題，每回答一個題目後，學生如果相當滿意你的教學成果，你就可以賺取積分，藉此獲得額外的收入！
                </p>
              </Fade>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Help;
