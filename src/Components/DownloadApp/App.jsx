import "./App.css";
import { Fade } from "react-reveal";
const App = ({ bg, img, head1, head2, btnText, btnColor }) => {
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
            <button style={{ backgroundColor: btnColor[0] }} className="cta">
              {btnText}
            </button>
          </Fade>

          {btnColor[1] !== null && (
            <>
              <Fade duration={400} bottom delay={800}>
                <button
                  style={{ backgroundColor: btnColor[1] }}
                  className="store"
                >
                  <img src="/assets/play.png" alt="" />
                  <div>
                    <h4>Google Play</h4>
                    <p>立即下載</p>
                  </div>
                </button>
              </Fade>
              <Fade right duration={400} delay={400}>
                <button
                  style={{ backgroundColor: btnColor[1] }}
                  className="store"
                >
                  <img src="/assets/apple.png" alt="" />
                  <div>
                    <h4>App Store</h4>
                    <p>立即下載</p>
                  </div>
                </button>
              </Fade>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
