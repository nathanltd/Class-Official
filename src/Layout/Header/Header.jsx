import "./Header.css";
import { useState, useEffect, useRef } from "react";
//ICON LIBRARY -----------------------
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
//React router dom-----------------------------
import { Link } from "react-router-dom";

const Header = () => {
  const [openHeader, setOpenHeader] = useState(false);
  const header = useRef(null);
  useEffect(() => {
    const addScrollClass = () => {
      if (window.scrollY > 100) {
        header.current.classList.add("header-move");
      } else {
        header.current.classList.remove("header-move");
      }
    };
    window.addEventListener("scroll", addScrollClass);
    return () => window.removeEventListener("scroll", addScrollClass);
  }, []);

  return (
    <div className="container header-wrapp">
      {openHeader && (
        <div
          onClick={() => {
            setOpenHeader(false);
          }}
          className="overlay"
        ></div>
      )}
      <header ref={header}>
        <Link to={"/"}>
          <img src="/assets/logo.png" alt="" />
        </Link>
        <nav className={`${openHeader ? "open-header" : ""}`}>
          <Link
            onClick={() => {
              setOpenHeader(false);
            }}
            to={"/class"}
            className="nav-links"
          >
            CLASS班級
          </Link>
          <Link
            onClick={() => {
              setOpenHeader(false);
            }}
            to={"/tutor"}
            className="nav-links"
          >
            CLASS問答
          </Link>
          <Link
            onClick={() => {
              setOpenHeader(false);
            }}
            to={"/bookstore"}
            className="nav-links"
          >
            CLASS書店 
          </Link>
          <a
            onClick={() => {
              setOpenHeader(false);
            }}
            href={"/#about"}
            className="nav-links"
          >
            關於我們
          </a>
          <a
            onClick={() => {
              setOpenHeader(false);
            }}
            href={"/#service"}
            className="nav-links"
          >
            服務與願景
          </a>
          <a
            onClick={() => {
              setOpenHeader(false);
            }}
            href={"/#contact"}
            className="nav-links"
          >
            聯絡我們
          </a>
        </nav>
        <FontAwesomeIcon
          icon={openHeader ? faXmark : faBars}
          onClick={() => {
            setOpenHeader((prev) => !prev);
          }}
        />
      </header>
    </div>
  );
};

export default Header;
