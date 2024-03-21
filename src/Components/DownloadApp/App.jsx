import "./App.css";
import { Fade } from "react-reveal";
const App = ({ bg, img, head1, head2, btnText, btnColor, btnDownload, actionUrl }) => {
  const doAction = () => {
    if (actionUrl) {
      window.open(actionUrl, '_blank')
    }
  }
  return (
    <div style={{ backgroundColor: bg }} className="app">
      <Fade delay={1000}>
        <img src={img} alt="" />
      </Fade>
      <div className="right-app">
        <Fade duration={700} collapse top>
          <h2>{head1}</h2>
          <h3>{head2}</h3>
        </Fade>
        <div className="btn-div">
          <Fade duration={400} left>
            <button style={{ backgroundColor: btnColor[0] }} className="cta"
              onClick={() => doAction()}
            >
              {btnText}
            </button>
          </Fade>

          {btnColor[1] !== null &&
            <div className="store-block">
              {
                btnDownload.map((item) => {
                  return (
                    <div className="store-btn">
                      <Fade duration={400} bottom delay={800}>
                        <button
                          style={{ backgroundColor: btnColor[1] }}
                          className="store"
                          onClick={() => window.open(item.play, '_blank')}
                        >
                          <img src="/assets/play.png" alt="" />
                          <div>
                            <h4>{item?.text}</h4>
                            <p>Google Play 立即下載</p>
                          </div>
                        </button>
                      </Fade>
                      <Fade right duration={400} delay={400}>
                        <button
                          style={{ backgroundColor: btnColor[1] }}
                          className="store"
                          onClick={() => window.open(item.apple, '_blank')}
                        >
                          <img src="/assets/apple.png" alt="" />
                          <div>
                            <h4>{item?.text}</h4>
                            <p>App Store 立即下載</p>
                          </div>
                        </button>
                      </Fade>
                    </div>
                  )
                })}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default App;
