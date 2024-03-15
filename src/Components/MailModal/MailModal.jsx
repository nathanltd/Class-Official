import "./MailModal.css";
import { useEffect } from "react";
//ICON LIBRARY ----------------------------
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MailModal = ({ closeModal }) => {
  useEffect(() => {
    document.querySelector(".foot-wrap").style.zIndex = "-1";
    return () => {
      document.querySelector(".foot-wrap").style.zIndex = "2";
    };
  }, []);

  return (
    <>
      <div className="overlay" onClick={() => closeModal(false)}></div>
      <div className="mail-modal">
        <FontAwesomeIcon icon={faXmark} onClick={() => closeModal(false)} />
        <h1>我們已收到你的來信！</h1>
        <img src="/assets/recieve.png" alt="" />
        <button onClick={() => closeModal(false)}>關閉</button>
      </div>
    </>
  );
};

export default MailModal;
