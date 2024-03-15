import "./styles/Function.css";
import { Fade } from "react-reveal";

const Function = () => {
  return (
    <div className="func">
      <Fade top>
        <h1 className="heading">功能說明</h1>
      </Fade>
      <div className="func-row">
        <Fade left>
          <img src="/assets/func1.png" alt="" />
        </Fade>
        <div>
          <Fade collapse top>
            <h2>任何時刻都能即時發問</h2>
            <p>
              平台擁有最完整的家教團隊，因此學生可以任何時刻、任何地點針對在課業上的困難進行發問，平台將會依據所選擇的方式來配對或將問題交給指定的家教，從而讓你最快速的獲得問題的答案，協助學生解決課業上的煩惱。
            </p>
          </Fade>
        </div>
      </div>
      <div className="func-row">
        <Fade right>
          <img src="/assets/func2.png" alt="" />
        </Fade>
        <div>
          <Fade left collapse>
            <h2>指定適合的教師尋求協助</h2>
            <p>
              平台提供優選教師的推薦，讓學生輕鬆的找到好老師、即時為學生解惑。也可以根據需求來尋找並指定適合自己的教師尋求課業上的協助，在問答結束後也能夠將教師加入最愛，下次還有任何疑問都能直接指定最愛教師。
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Function;
