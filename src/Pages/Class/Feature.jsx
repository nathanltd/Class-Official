import "./styles/Feature.css";
import { Fade } from "react-reveal";

const Feature = () => {
  return (
    <div className="feature">
      <Fade top>
        <h1 className="heading">企業版功能說明</h1>
      </Fade>
      <div className="feature-box">
        <Fade delay={500} left>
          <img src="/assets/Frame 3389.png" alt="" />
        </Fade>
        <div className="right-feature-box">
          <h3 className="number">1</h3>
          <Fade delay={500} collapse right>
            <h2>
              師生溝通
            </h2>
            <br />
            <h2>
              點名出勤＋數位聯絡簿
            </h2>
            <p>
              補教企業可以直接在系統中掌握教職員與學生的出缺席，老師與學生透過APP請假後，系統即自動化的紀錄各項請假資料，方便企業管理。明日的作業與考試皆可透過數位聯絡簿來傳達給家長，輕鬆又省時。
            </p>
          </Fade>
        </div>
      </div>
      <div className="feature-box">
        <Fade right>
          <img src="/assets/Frame 3388.png" alt="" />
        </Fade>
        <div className="right-feature-box">
          <h3 className="number">2</h3>
          <Fade collapse left>
            <h2>
              學習記錄
            </h2>
            <br />
            <h2>
              紀錄成績＋活動相簿
            </h2>
            <p>
              學生成績是家長最重視的項目之一，在系統中可以記錄各科目的考試成績，並可以透過日期來快速查詢，每個學生的成績也會有視覺化的圖表供老師快速掌握學生的學習狀況。另外，也有班級相簿的功能可以記錄班級活動花絮，讓每個精彩瞬間都能夠被保存下來。
            </p>
          </Fade>
        </div>
      </div>
      <div className="feature-box">
        <Fade left>
          <img src="/assets/Frame 3387.png" alt="" />
        </Fade>
        <div className="right-feature-box">
          <h3 className="number">3</h3>
          <Fade collapse right>
            <h2>
              校務行政管理
            </h2> <br />
            <h2>
              收費財務＋人事管理
            </h2>
            <p>
              企業可於系統紀錄財務相關收支狀況如學生繳費紀錄、教職員薪資紀錄等財務收支，幫助你快速計算當月營收。且可以透過系統直接管理課程的資訊並排課，一手掌握老師何時需要上課、以及上的課程項目。
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Feature;
