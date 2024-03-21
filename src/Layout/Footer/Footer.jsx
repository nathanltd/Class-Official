import "./Footer.css";
//React Router
import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const go = (path) => {
    if (location.pathname === '/') {
      goView(path);
    } else {
      navigate('/');
      setTimeout(() => {
        goView(path);
      }, 900);
    }
  };

  const goView = (path) => {
    let anchorElement = document.getElementById(path);
    if (anchorElement) {
      anchorElement.scrollIntoView();
    }
  }

  return (
    <div className="container foot-wrap">
      <img
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        src="/assets/arrow-up.png"
        alt=""
        className="scroll-up"
      />
      <footer>
        <div>
          <Link to={"/"}>
            <img src="/assets/logo.png" alt="" />
          </Link>
          <p>Copyright ©Class Ltd. 2022</p>
        </div>
        <div className="right-footer">
          <div className="foot-col">
            <h2>產品與服務</h2>
            <Link to="/class">CLASS 班級</Link>
            <Link to="/tutor">CLASS 問答</Link>
            <Link to="/bookstore">CLASS 書店</Link>
          </div>
          <div className="foot-col">
            <h2>關於 Class</h2>
            <a onClick={() => go('about')}>關於我們</a>
            <a onClick={() => go('service')}>服務與願景</a>
            <a onClick={() => go('contact')}>聯絡我們</a>
          </div>
          <div className="foot-col">
            <h2>追蹤我們</h2>
            <div className="social-div">
              <a href="https://line.me/R/ti/p/%40277bgmdt">
                <img src="/assets/line.png" alt="" />
              </a>
              <a href="https://facebook.com/qr?id=100082804461160">
                <img src="/assets/fb.png" alt="" />
              </a>
              <a href="https://www.instagram.com/classuptw/">
                <img src="/assets/ig.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
