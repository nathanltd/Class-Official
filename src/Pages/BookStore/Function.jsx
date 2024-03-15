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
          <img src="/assets/func3.png" alt="" />
        </Fade>
        <div>
          <Fade collapse right>
            <h2 className="book-store">收藏你最愛的書籍</h2>
            <p>
              當你看到喜愛的書籍時，你可以把他加入收藏，在會員中心的「已收藏的書籍」就可以隨時查看該書籍，未來若想要再次查看該書籍，只要到會員中心已收藏的書籍尋找就可以了。
            </p>
          </Fade>
        </div>
      </div>
      <div className="func-row">
        <Fade right>
          <img src="/assets/func4.png" alt="" />
        </Fade>
        <div>
          <Fade collapse left>
            <h2 className="book-store">紀錄書籍閱讀進度</h2>
            <p>
              電子書將會自動記錄你的閱讀進度，在你每一次線上開啟書籍檔案來閱讀時，系統會自動幫你前往到你之前閱讀的那一頁，方便你繼續閱讀書籍，減少你尋找頁數的時間。
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Function;
