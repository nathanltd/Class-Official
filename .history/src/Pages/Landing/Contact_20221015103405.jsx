import { useState } from "react";
import MailModal from "../../Components/MailModal/MailModal";
import "./styles/Contact.css";
import { Fade } from "react-reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    school: "",
    service: "",
    content: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  /*
  const submitHandler = async (e) => {
    e.preventDefault();
    // axios
    //   .post(
    //     "https://script.google.com/macros/s/AKfycbx_jGvvdg6NEhaPBgAtF5FQlcTgGuSReBgMBjS1J_YE7srs-QfrlcxcemfXgAFn2kVf/exec",
    //     formData
    //   )
    //   .then(() => console.log("done0"))
    //   .catch(() => console.log("error"));
  };
  */
  //input field handler ------------------------------------
  /*
  const changeHandler = (e) => {
    const inputName = e.target.name;
    setFormData((prev) => {
      return { ...prev, [inputName]: e.target.value };
    });
    for (const key in formData) {
      if (Object.hasOwnProperty.call(formData, key)) {
        const element = formData[key];
        if (element === "") {
          setDisabled(false);
        } else {
          setDisabled(true);
        }
      }
    }
  };
  */
  return (
    <div id="contact" className="contact">
      {openModal && <MailModal closeModal={setOpenModal} />}
      <div className="max-cont">
        <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
        <Fade>
          <form
            action="https://script.google.com/macros/s/AKfycbx_jGvvdg6NEhaPBgAtF5FQlcTgGuSReBgMBjS1J_YE7srs-QfrlcxcemfXgAFn2kVf/exec"
            method="post"
            target="hidden_iframe"
            //onSubmit={submitHandler}
          >
            <input
              //onChange={changeHandler}
              name="name"
              //value={formData.name}
              type="text"
              placeholder="姓名*"
            />
            <input
              //onChange={changeHandler}
              //value={formData.phone}
              name="phone"
              type="text"
              placeholder="電話*"
            />
            <input
              //onChange={changeHandler}
              //value={formData.email}
              name="email"
              type="text"
              placeholder="Email*"
            />
            <input
              //onChange={changeHandler}
              //value={formData.school}
              name="school"
              type="text"
              placeholder="學校／補習班名稱*"
            />
             <input
              //onChange={changeHandler}
              //value={formData.service}
              name="service"
              type="text"
              placeholder="服務*"
            />
            <input
              //onChange={changeHandler}
              //value={formData.content}
              name="content"
              type="text"
              placeholder="描述*"
            />
            <button
              
              className={` ""  `}
              type="submit"
            >
              送出
            </button>
          </form>
        </Fade>
        <div className="contact-info">
          <Fade top>
            <h2>想要數位化經營，提供三位一體的服務給學生家長嗎？</h2>
          </Fade>
          <div className="contacts">
            <Fade bottom cascade>
              <a href="mailto:class@gmail.com">
                <img src="/assets/mail.png" alt="" /> class@gmail.com
              </a>

              <a href="tel:(03)3568371">
                <img src="/assets/phone.png" alt="" /> (03)3568371
              </a>
              <a href="#">
                <img src="/assets/location.png" alt="" />{" "}
                新北市中和區中豐路888巷66號
              </a>
            </Fade>
          </div>
        </div>
      </div>
      <img src="/assets/girl.png" alt="" className="girl" />
    </div>
  );
};

export default Contact;
