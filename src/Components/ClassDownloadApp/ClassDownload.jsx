import "./ClassDownload.css";
import { Fade } from "react-reveal";
const ClassDownload = () => {

  const goStore = (type) => {
    let url = '';
    switch (type) {
      case 'student-play':
        url = 'https://play.google.com/store/apps/details?id=com.student.app.class_student_app&hl=zh_TW&gl=US';
        break;
      case 'student-apple':
        url = 'https://apps.apple.com/at/app/class%E7%8F%AD%E7%B4%9A-%E5%AD%B8%E7%94%9F%E7%89%88/id6464454989';
        break;
      case 'teacher-play':
        url = 'https://play.google.com/store/apps/details?id=com.teacher.app.class_teacher_app&hl=zh_TW&gl=US';
        break;
      case 'teacher-apple':
        url = 'https://apps.apple.com/at/app/class%E7%8F%AD%E7%B4%9A-%E8%80%81%E5%B8%AB%E7%89%88/id6464455017';
        break;
      case 'parents-play':
        url = 'https://play.google.com/store/apps/details?id=com.parent.app.class_parent_app&hl=zh_TW&gl=US';
        break;
      case 'parents-apple':
        url = 'https://apps.apple.com/at/app/class%E7%8F%AD%E7%B4%9A-%E5%AE%B6%E9%95%B7%E7%89%88/id6464455047';
        break;
      default:
        break;
    }
    window.open(url, '_blank');
  }

  return (
    <div className="download-block">
      <div className="header">
        <Fade duration={700} collapse top>
          <h2>減輕你的管理負擔</h2>
          <h3>釋放你在班級管理上的一切煩惱！</h3>
        </Fade>
      </div>
      <div className="btn-div">
        {(
          <>
            <Fade duration={400} bottom delay={800}>
              <button
                className="store"
                onClick={() => goStore('student-play')}
              >
                <img src="/assets/play.png" alt="" />
                <div>
                  <h4>學生APP</h4>
                  <p>Google Play 立即下載</p>
                </div>
              </button>
            </Fade>
            <Fade right duration={400} delay={400}>
              <button
                className="store download-margin"
                onClick={() => goStore('student-apple')}
              >
                <img src="/assets/apple.png" alt="" />
                <div>
                  <h4>學生APP</h4>
                  <p>App Store 立即下載</p>
                </div>
              </button>
            </Fade>
            <Fade duration={400} bottom delay={800}>
              <button
                className="store"
                onClick={() => goStore('teacher-play')}
              >
                <img src="/assets/play.png" alt="" />
                <div>
                  <h4>教師APP</h4>
                  <p>Google Play 立即下載</p>
                </div>
              </button>
            </Fade>
            <Fade right duration={400} delay={400}>
              <button
                className="store download-margin"
                onClick={() => goStore('teacher-apple')}
              >
                <img src="/assets/apple.png" alt="" />
                <div>
                  <h4>教師APP</h4>
                  <p>App Store 立即下載</p>
                </div>
              </button>
            </Fade>
            <Fade duration={400} bottom delay={800}>
              <button
                className="store"
                onClick={() => goStore('parents-play')}
              >
                <img src="/assets/play.png" alt="" />
                <div>
                  <h4>家長APP</h4>
                  <p>Google Play 立即下載</p>
                </div>
              </button>
            </Fade>
            <Fade right duration={400} delay={400}>
              <button
                className="store"
                onClick={() => goStore('parents-apple')}
              >
                <img src="/assets/apple.png" alt="" />
                <div>
                  <h4>家長APP</h4>
                  <p>App Store 立即下載</p>
                </div>
              </button>
            </Fade>
          </>
        )}
      </div>
      <div className="downlaod-img-block">
        <div className="downlaod-img">
          <img src="/assets/class-downlaod1-1.png" alt="" />
          <img src="/assets/class-downlaod1-2.png" alt="" />
        </div>
        <div className="end-img">
          <img src="/assets/class-downlaod1-3.png" alt="" />
        </div>
        <div className="downlaod-img">
          <img src="/assets/class-downlaod2-1.png" alt="" />
          <img src="/assets/class-downlaod2-2.png" alt="" />
        </div>
        <div className="end-img">
          <img src="/assets/class-downlaod2-3.png" alt="" />
        </div>
        <div className="downlaod-img">
          <img src="/assets/class-downlaod3-1.png" alt="" />
          <img src="/assets/class-downlaod3-2.png" alt="" />
        </div>
        <div className="end-img">
          <img src="/assets/class-downlaod3-3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ClassDownload;
