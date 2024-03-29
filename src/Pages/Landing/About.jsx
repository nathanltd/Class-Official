import "./styles/About.css";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <div className="about">
      <img src="/assets/bg-book.svg" alt="" className="book" />
      <img src="/assets/bg-trophy.svg" alt="" className="trophy" />
      <div className="max-cont">
        <Fade top>
          <h1>關於我們</h1>
        </Fade>
        <div>
          <div id="about" className="func-row">
            <Fade left>
              <img src="/assets/home-photo1-1.png" alt="" />
            </Fade>
            <div>
              <Fade right>
                <h2>關於CLASS</h2>
                <p className="text-left">
                  克雷斯是取自於建構學習成長環境的「教室 Class」而來，希望克雷斯透過科技的力量讓學子們可以無時無刻、不受時間及場域的限制都可享有完整的學習資源，幫助孩子認識自己也銜接未來。
                </p>
                <p className="text-left pt-4" >
                  COVID-19 疫情肆虐期間，陪孩子們站在最前線的學校、教師及家長面臨挑戰，嘗試各種工具弭平線上及實體教學的落差，即使成功找到工具輔助，還是花費過多時間適應不同工具及新的教學型態，影響了孩子們的學習。學校及教師有時間可以調整尋找適當的工具，但孩子的學習時間是不可逆的！                </p>
                <p className="text-left pt-4" >
                  因此，我們決定成立 Class克雷斯，「為教育而生，讓科技成就教育」作為核心理念，立志提供最完善的數位學習平台。                </p>
              </Fade>
            </div>
          </div>
          <div id="service" className="func-row">
            <Fade right>
              <img src="/assets/home-photo2-1.png" alt="" />
            </Fade>
            <div>
              <Fade left >
                <h2>服務與願景</h2>
                <p className="text-left " >
                  讓每位學子，不論時間場域，都可以取得需要的學習資源。
                </p>
                <p className="text-left pt-4">
                  在教育結合科技創新趨勢下，克雷斯憑藉著多年教育經驗，致力翻轉教育，打造不受限的數位學習平台及經營工具。幫助教育機構降低數位化門檻，提升教學品質與服務，打造共贏環境。藉由科技的力量，輔助學子擁有自我學習的能力，以面對未來不斷地挑戰，成就更好的自己，也成就台灣更好的未來。
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
